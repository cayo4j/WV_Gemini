/**
* @ngdoc controller
* @name lllActivity.controller:lllActivitySummary
* @param {lllActivity.service:lllActivitySummary} lllActivitySummary  class constructor argument
* @extends lllActivity.controller:LllActivityBaseController
* @description
* 
* extends lllActivity.controller:LllActivityBaseController
**/
import LllActivityBaseController from '../lll-activity-base/lll-activity-base-controller';


class LllActivitySummaryController extends LllActivityBaseController {
    constructor(lllActivitySummary, lllScorm) {
	 
    	super();
		
		
		this.nextSco = () => {
			lllScorm.endSummary(this.lessonModel);
		}	
	
	   	this.lessonSummary = lllActivitySummary.evalLessonSummary(this.lessonModel);
        this.onSubmitActivity({ activityModel: this.activityModel });
	
		if(this.lessonModel.title == "External Hardware Overview - Exercise"){
			console.info("\n\n\n\n\n\n\n\n\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ SUCCESS!!!!!!!!!!!!");
			swal({title:"Great Work.", text:"You have identified the external parts of the Gemini Touch!"})//sc
		}
	}
}



LllActivitySummaryController.$inject = ['lllActivitySummary', 'lllScorm'];

export default LllActivitySummaryController;
