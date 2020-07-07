"use strict"

let speechOutput;
let reprompt;
 let audio =`<audio src="https://s3.amazonaws.com/handcricket/tune_final.mp3" />`;
 let hurry =`<audio src="https://s3.amazonaws.com/handcricket/gIlJmUAJ-applause8.mp3"/>`;
let welcomeOutput = `welcome to hand cricket,${audio} say start to start the game` ;
let welcomeReprompt = "say start to start the game";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';

function randomPhrase(array) {
		// the argument is an array [] of words or phrases
		let i = 0;
		i = Math.floor(Math.random() * array.length);
		return(array[i]);
}

let x=0;
var say;
 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`]);
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'say start to start the game ,select one number from one to six to proceed';
		reprompt = '';
		this.emit(':ask', speechOutput, reprompt);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'ok,have a nice day see you soon';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'ok,have a nice day see you soon';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.FallbackIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "could not get what you said, say start to start the game, say help if you want help ";
		this.emit(":ask", speechOutput, speechOutput);
    },




		'start': function () {
			speechOutput = '';

			//any intent slot variables are listed here for convenience
		//Your custom intent handling goes here
			speechOutput = `In this you need to select one number between one to six ,then alexa says one number randomly, if your number matches with alexa random number, then you are out, else the number you said will be added to your score,say number to proceed`;
			this.emit(":ask", speechOutput, speechOutput);
	    },
	'one': function () {
		speechOutput = '';
 if(say === "one"){

 x=x+0;

	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;
   x=0;
  this.emit(":ask", speechOutput, speechOutput);
 }
		//any intent slot variables are listed here for convenience
else{

	x=x+1;
	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
 this.emit(":ask", speechOutput, speechOutput);
}

		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here

    },
	'two': function () {
		speechOutput = '';
		if(say === "two"){

	  x=x+0;

	 	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;
     x=0;
    	this.emit(":ask", speechOutput, speechOutput);
	  }
	 		//any intent slot variables are listed here for convenience
	 else{

	 	x=x+2;
	 	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
	  this.emit(":ask", speechOutput, speechOutput);
	 }

	 		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here

    },
	'three': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
		if(say === "three"){

	  x=x+0;

	 	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;
     x=0;
      this.emit(":ask", speechOutput, speechOutput);
	  }
	 		//any intent slot variables are listed here for convenience
	 else{

	 	x=x+3;
	 	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
	  this.emit(":ask", speechOutput, speechOutput);
	 }

	 		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here


		//Your custom intent handling goes here

    },
	'four': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
		if(say === "four"){

	  x=x+0;

	 	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;
      x=0;
      this.emit(":ask", speechOutput, speechOutput);
	  }
	 		//any intent slot variables are listed here for convenience
	 else{

	 	x=x+4;
	 	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
	  this.emit(":ask", speechOutput, speechOutput);
	 }

	 		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here


		//Your custom intent handling goes here

    },
	'five': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
		if(say === "five"){

	  x=x+0;

	 	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;

       x=0;

      this.emit(":ask", speechOutput, speechOutput);
	  }
	 		//any intent slot variables are listed here for convenience
	 else{

	 	x=x+5;
	 	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
	  this.emit(":ask", speechOutput, speechOutput);
	 }

	 		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here

		//Your custom intent handling goes here
    },
	'six': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
		if(say === "six"){

	  x=x+0;

	 	 speechOutput = `you are bowled, your score is ${x}, to continue new match say some number between one to six `;
      x=0;
	  	this.emit(":ask", speechOutput, speechOutput);
	  }
	 		//any intent slot variables are listed here for convenience
	 else{

	 	x=x+6;
	 	speechOutput = ` ${hurry},good going,your current score is ${x}, say some number in one to six `;
	  this.emit(":ask", speechOutput, speechOutput);
	 }

	 		 say = randomPhrase([`one`,`two`,`three`,`four`,`five`,`six`])//Your custom intent handling goes here

		//Your custom intent handling goes
    },

	'Unhandled': function () {
        speechOutput = "couldn't get you ,say start to start the game, say help if you want help";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  let updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code is necessary if using ASK SDK versions prior to 1.0.9
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');

    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}



function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
