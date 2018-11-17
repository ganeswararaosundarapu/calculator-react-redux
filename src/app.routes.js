'use strict';
// const Boom = require('boom');
const Utils = require('../utils/util.common');
const { messages: { failedStatus} } = require('../config');

module.exports = {
  name: 'appRoutes',
  register: async (server, options) => {

      server.route({
          method: 'POST',
          path: '/costAlert',
          handler: async (request, reply) => {
            try{
              const responseData =  await Utils.createOrUpdateCostAlerts(request);
              return responseData;
            }catch(e){
              // return Boom.badImplementation(e);
              return {
                  status: failedStatus,
                  message: e
                }
            }
          }
      });

      server.route({
          method: 'POST',
          path: '/sendPush',
          handler: async (request, reply) => {
            try{
              let companyId = request.payload.companyId || '';
              let type = request.payload.type || 'stores';

              let  data = await Utils.callbackToPromise(Utils.sendAPNPushNotifications, companyId, type);
              return data;
            }catch(e){
              // return Boom.badImplementation(e);
              return {
                  status: failedStatus,
                  message: e
                }
            }
          }
      });

  }
};
