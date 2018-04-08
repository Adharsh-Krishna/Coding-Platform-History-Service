let mongoose=require('mongoose');

let schema=mongoose.Schema(
    {
        solved : Date,
        attempted : Date,

        user_id : {
            type : mongoose.Schema.ObjectId,
            ref : 'userinfos'
        },

        prob_id : {
            type : mongoose.Schema.ObjectId,
            ref : 'problems'
        }
    },

    {
        timestamps : true
    },
    {
        collection:'History'
    }
);


exports.instance=function (mon) {
    return mon.model('History',schema);
};