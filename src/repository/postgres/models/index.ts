import Interview from "./interview";
import User from "./user";
import Comment from './comment'
import Changelog from "./changelog";

User.hasMany(Interview);
User.hasMany(Comment);
User.hasMany(Changelog);
Interview.hasMany(Comment);
Interview.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(Interview);
Changelog.belongsTo(User);

const Model = {
    User,
    Interview,
    Comment,
    Changelog,
};

export default Model;
