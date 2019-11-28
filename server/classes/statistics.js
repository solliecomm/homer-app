import LivingBeing from './living_being';

const table = 'user_settings';

/**
 * A class to handle users in DB
 */
class Statistics extends LivingBeing {
  /**
   * Class constructor
   *
   * @param {object} server of hapi
   * @param {object} username
   */
  constructor(server, username) {
    super({db: server.databases.statistics, table});
    this.statsDb = server.databases.statistics;
    this.username = username;
  }

  /**
   * Get user data by 'username'
   *
   * @param {array} columns - list of column names
   * @return {object} user data
   */
  getDatabases() {
    return this.statsDb.getDatabaseNames().then((names) => {
      let globalReply = {
        total: names.length,
        data: names,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getRetentions(database) {
    return this.statsDb.showRetentionPolicies(database).then((polices) => {
      let globalReply = {
        total: polices.length,
        data: polices,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getMeasurements(database) {
    return this.statsDb.getMeasurements(database).then((mses) => {
      let globalReply = {
        total: mses.length,
        data: mses,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getMetrics(query) {
    let main = query.main;
    let database = query.database;
    let retention = query.retention;

    let options = {
      database: database,
      precision: 's',
      retentionPolicy: retention,
    };

    let influxQuery = 'SHOW FIELD KEYS FROM "'+main+'"';

    return this.statsDb.queryRaw(influxQuery, options).then((mses) => {
      let globalReply = {
        total: mses.length,
        data: mses,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getTagsKeys(query) {
    let main = query.main;
    let database = query.database;
    let retention = query.retention;

    let options = {
      database: database,
      precision: 's',
      retentionPolicy: retention,
    };

    let influxQuery = 'SHOW TAG KEYS FROM "'+main+'"';

    return this.statsDb.queryRaw(influxQuery, options).then((mses) => {
      let globalReply = {
        total: mses.length,
        data: mses,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getTagsValues(query) {
    let main = query.main;
    let database = query.database;
    let retention = query.retention;
    let key = query.tag;

    let options = {
      database: database,
      precision: 's',
      retentionPolicy: retention,
    };

    let influxQuery = 'SHOW TAG VALUES FROM "'+main+'" WITH KEY IN ("'+key+'")';

    return this.statsDb.queryRaw(influxQuery, options).then((mses) => {
      let globalReply = {
        total: mses.length,
        data: mses,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }

  getData(payload) {
    let param = payload.param;
    let query = param.query[0];

    let localLimit = param.limit;
    let main = query.main;
    let database = query.database;
    let tag = query.tag;
    let type = query.type;
    let retention = query.retention;
    let sData = payload.param.search;
    let rawQuery = '';
    let rawPath = '';
    let dataWhere = {};
    /* jshint -W089 */
    let timeWhere = [];
    let startTs = new Date(payload.timestamp.from).getTime();
    let stopTs = new Date(payload.timestamp.to).getTime();
    let fromTs = startTs*1000000;
    let toTs = stopTs*1000000;
    let precision = '60s';

    let options = {
      database: database,
      retentionPolicy: retention,
      precision: 's',
    };

    let diff = (stopTs-startTs)/1000/60/60;
    let indexRange = '60s';
    if (diff <= 2) indexRange = '60s';
    else if (diff >= 2 && diff <= 8) indexRange = '300s';
    else if (diff >= 8 && diff <= 50) indexRange = '3600s';
    else indexRange = '86400s';

    let tagName = '';
    let myPrefix = '';
    let newCountArray = [];

    if (database == 'hepic') {
      retention = indexRange;
      if (indexRange != '60s' && indexRange != 'autogen') myPrefix='mean_';
    }

    let queryDB = database+'.'+retention;

    type.forEach((value) => {
      newCountArray.push('mean("'+myPrefix+value+'") AS "'+value+'"');
    });

    let counterName = '*';
    if (newCountArray.length > 0) counterName = newCountArray.join();

    let influxQuery = 'SELECT '+counterName+' FROM '+queryDB+'."'+main+'" WHERE '
    +'time > '+fromTs+' AND '+toTs+' > time '+tagName+' GROUP BY time('+indexRange+') FILL(null) LIMIT '+localLimit;

    if (query.hasOwnProperty('rawquery') && query.rawquery && query.rawquery.length > 0) {
      rawQuery = query.rawquery;
      influxQuery = rawQuery.replace(':database:', database)
        .replace(':retention:', retention)
        .replace(':measurement:', main)
        .replace(':from:', fromTs)
        .replace(':to:', toTs)
        .replace(':interval:', indexRange)
        .replace(':limit:', localLimit);
    }


    return this.statsDb.query(influxQuery, options).then((mses) => {
      // groupsTagsKeys: [],
      // groupRows: [ { name: 'cpu', rows: [Array], tags: {} } ],
      let globalReply = {
        total: mses.length,
        data: mses,
        status: 'ok',
        auth: 'ok',
      };

      return globalReply;
    })
      .catch((err) => {
        console.error('Error....');
      });
  }
}

export default Statistics;
