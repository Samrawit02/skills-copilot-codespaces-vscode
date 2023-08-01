function skillMember(){
    return{
        restrict: 'g',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs:'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}