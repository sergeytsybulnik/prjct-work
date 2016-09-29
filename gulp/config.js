var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;

var devPath = 'src';
var destPath = 'build';
var tmpPath = '.tmp';

var config = {
    env       : 'development',
    production: production,

    src: {
        root         : devPath,
        templates    : devPath + '/templates',
        templatesData: devPath + '/templates/data',
        sass         : devPath + '/sass',
        js           : devPath + '/js',
        img          : devPath + '/img',
        icons        : devPath + '/icons',
        data         : devPath + '/data',
        fonts        : devPath + '/fonts',
        lib          : devPath + '/lib',
        blocks       : devPath + '/blocks'
    },
    dest: {
        root : destPath,
        html : destPath,
        css  : destPath + '/css',
        js   : destPath + '/js',
        img  : destPath + '/img',
        fonts: destPath + '/fonts',
        lib  : destPath + '/lib',
    },

    tmp: {
        root     :  tmpPath,
        data     :  tmpPath + '/data',
        jsonFile :  'data.json'
    },

    setEnv: function(env) {
        if (typeof env !== 'string') return;
        this.env = env;
        this.production = env === 'production';
        process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
            'Environment:',
            util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
