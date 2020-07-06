(function() {
  var Clearbit, providePlugin,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  providePlugin = function(pluginName, pluginConstructor) {
    var tryApply = function() {
      var ga = window[window['GoogleAnalyticsObject'] || 'ga'];

      if (typeof ga === 'function') {
        ga('provide', pluginName, pluginConstructor);
        return true;
      } else {
        return false;
      }
    }

    if (tryApply()) {
      // Native support
    } else if (window.analytics && typeof window.analytics.ready === 'function') {
      // Segment support
      analytics.ready(tryApply);
    } else {
      console.error("Clearbit error: 'ga' variable not found.");
    }
  };

  Clearbit = (function() {
      function Clearbit(tracker, config) {
        this.tracker = tracker;
        this.config = config != null ? config : {};
        this.triggerEvent = bind(this.triggerEvent, this);
        this.setIPDimensions = bind(this.setIPDimensions, this);
        this.setDimensions = bind(this.setDimensions, this);
        this.set = bind(this.set, this);
        this.done = bind(this.done, this);
        this.mapping = this.config.mapping || {};
        this.done({"ip":"98.210.73.66","domain":"segment.com","fuzzy":true,"company":{"id":"f3514cf8-c3c1-4eb4-be6a-13604de59c8b","name":"Segment","legalName":"Segment.io Inc","domain":"segment.com","domainAliases":["segment.io"],"url":"http://segment.com","site":{"url":"http://segment.com","title":"Segment | Customer Data Platform (CDP)","h1":"The best companies are built on\n                \n        ...","metaDescription":"Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.","metaAuthor":null,"phoneNumbers":["+1 866-538-5962"],"emailAddresses":["privacy@segment.com","legal@segment.com","friends@segment.com"]},"category":{"sector":"Information Technology","industryGroup":"Software \u0026 Services","industry":"Internet Software \u0026 Services","subIndustry":"Internet Software \u0026 Services","sicCode":"73","naicsCode":"54"},"tags":["Technology","Information Technology \u0026 Services","Internet","SAAS","B2B"],"description":"Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.","foundedYear":2012,"location":"100 California St #700, San Francisco, CA 94111, USA","timeZone":"America/Los_Angeles","utcOffset":-7,"geo":{"streetNumber":"100","streetName":"California Street","subPremise":"700","city":"San Francisco","postalCode":"94111","state":"California","stateCode":"CA","country":"United States","countryCode":"US","lat":37.7940042,"lng":-122.3980029},"logo":"https://logo.clearbit.com/segment.com","facebook":{"handle":"segmentio"},"linkedin":{"handle":"company/segment-io"},"twitter":{"handle":"segment","id":"379327241","bio":"We help companies put their customers first with our customer data platform. Get a demo: https://t.co/2sNnjhgzpV   Support: https://t.co/Ovb1c4DfDf","followers":22615,"following":7290,"location":"San Francisco, CA","site":"https://t.co/lJXmMreyFm","avatar":"https://pbs.twimg.com/profile_images/1268236101681963008/1vw2IN5A_normal.jpg"},"crunchbase":{"handle":"organization/segment-io"},"emailProvider":false,"type":"private","ticker":null,"phone":null,"metrics":{"alexaUsRank":1991,"alexaGlobalRank":8060,"employees":590,"employeesRange":"251-1000","marketCap":null,"raised":283700000,"annualRevenue":null,"estimatedAnnualRevenue":"$50M-$100M","fiscalYearEnd":null},"tech":["google_apps","customer_io","aws_route_53","optimizely","recaptcha","nginx","segment","contentful","bing_advertiser","mad_kudu","facebook_advertiser","google_analytics","hotjar","conversio","drift","google_tag_manager"],"parent":{"domain":null}}});
      }
      Clearbit.prototype.done = function(response) {
          if (response) {
             this.setIPDimensions(response);
             if (response.company){
                 this.setDimensions(response.company);
            }
            return this.triggerEvent();
         }
       };
        Clearbit.prototype.set = function(key, value) {
         if (key && value) {
           return this.tracker.set(key, value);
         }
       };
        Clearbit.prototype.setIPDimensions = function(response) {
         if (typeof response.type !== 'undefined') {
           this.set(this.mapping.type, response.type)
         }
       }

    Clearbit.prototype.setDimensions = function(company) {
      var ref, ref1;
      this.set(this.mapping.companyName, company.name);
      this.set(this.mapping.companyDomain, company.domain);
      this.set(this.mapping.companyType, company.type);
      this.set(this.mapping.companyTags, (ref = company.tags) != null ? ref.join(',') : void 0);
      this.set(this.mapping.companyTech, (ref1 = company.tech) != null ? ref1.join(',') : void 0);
      this.set(this.mapping.companySector, company.category.sector);
      this.set(this.mapping.companyIndustryGroup, company.category.industryGroup);
      this.set(this.mapping.companyIndustry, company.category.industry);
      this.set(this.mapping.companySubIndustry, company.category.subIndustry);
      this.set(this.mapping.companySicCode, company.category.sicCode);
      this.set(this.mapping.companyNaicsCode, company.category.naicsCode);
      this.set(this.mapping.companyCountry, company.geo.countryCode);
      this.set(this.mapping.companyState, company.geo.stateCode);
      this.set(this.mapping.companyCity, company.geo.city);
      this.set(this.mapping.companyFunding, company.metrics.raised);
      this.set(this.mapping.companyEstimatedAnnualRevenue, company.metrics.estimatedAnnualRevenue);
      this.set(this.mapping.companyEmployeesRange, company.metrics.employeesRange);
      this.set(this.mapping.companyEmployees, company.metrics.employees);
      return this.set(this.mapping.companyAlexaRank, company.metrics.alexaGlobalRank);
    };

    Clearbit.prototype.triggerEvent = function() {
      return this.tracker.send(
        'event',
        'Clearbit',
        'Enriched',
        'Clearbit Enriched',
        {nonInteraction: true}
      );
    };

    return Clearbit;

  })();

  providePlugin('Clearbit', Clearbit);

  

  

}).call(this);
