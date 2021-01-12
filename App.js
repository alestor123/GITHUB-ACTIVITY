var axios = require('axios'),
ac = [],
acts = ["WatchEvent","PushEvent","CreateEvent","PullRequestEvent","DeleteEvent","ForkEvent","IssueCommentEvent","PullRequestReviewCommentEvent","IssuesEvent","PublicEvent",];
module.exports = async username => {
var data = await axios.get(`https://api.github.com/users/${username}/events`)
data.data.filter((activity) => acts.includes(activity.type)).slice(0, 10).map(activity => ac.push(Events(activity)))
return ac
}
function Events(activity){
    var repo = activity.repo.name
            if(activity.type=="ForkEvent") return `Forked a repo from ${activity.payload.forkee.html_url}`;
            else if(activity.type=="PushEvent")  return `Pushed https://github.com/${repo}`;
            else if(activity.type=="PullRequestEvent")  return `${activity.payload.action.charAt(0).toUpperCase() + activity.payload.action.slice(1)} a PR at https://github.com/${repo}`;
            else if("WatchEvent"==activity.type) return `Starred https://github.com/${repo}`;
            else if("CreateEvent"==activity.type)return `Created a ${activity.payload.ref_type} at https://github.com/${repo}`;
            else if("DeleteEvent"==activity.type) return `Deleted a ${activity.payload.ref_type} at https://github.com/${repo}`;
            else if(""==activity.type)return `${activity.payload.action.charAt(0).toUpperCase() + activity.payload.action.slice(1)} an issue at https://github.com/${repo}`;
            else if(""==activity.type)return `${activity.payload.action.charAt(0).toUpperCase() + activity.payload.action.slice(1)} an issue at https://github.com/${repo}`;
            else if("IssuesEvent"==activity.type)return `${activity.payload.action.charAt(0).toUpperCase() + activity.payload.action.slice(1)} an issue at https://github.com/${repo}`;
            else if("IssueCommentEvent"==activity.type)return `${activity.payload.action.charAt(0).toUpperCase() + activity.payload.action.slice(1)} an issue at https://github.com/${repo}`;
            else if("PublicEvent"==activity.type)return `Push https://github.com/${repo} public`;
            else return "";
} 