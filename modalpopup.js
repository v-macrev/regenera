/*
 
 ============================================
 License for Application
 ============================================
 
 This license is governed by United States copyright law, and with respect to matters
 of tort, contract, and other causes of action it is governed by North Carolina law,
 without regard to North Carolina choice of law provisions.  The forum for any dispute
 resolution shall be in Wake County, North Carolina.
 
 Redistribution and use in source and binary forms, with or without modification, are
 permitted provided that the following conditions are met:
 
 1. Redistributions of source code must retain the above copyright notice, this list
 of conditions and the following disclaimer.
 
 2. Redistributions in binary form must reproduce the above copyright notice, this
 list of conditions and the following disclaimer in the documentation and/or other
 materials provided with the distribution.
 
 3. The name of the author may not be used to endorse or promote products derived from
 this software without specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
 WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
 AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 
 */

// jQuery formatted selector to search for focusable items
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

// store the item that has focus before opening the modal window
var focusedElementBeforeModal;

$(document).ready(function() {

  // Updated by Chad
  // This could better if you could send the modal name through the data 
  // attributes into one function to kick off the modal 
  // See the data-target attributes in the button for a start


  // CIRÚRGICOS
    
    jQuery('#aumentopenianobtn').click(function(e) {
        showModal($('#aumentopenianomodal'));
    });
	
	jQuery('#bichectomiabtn').click(function(e) {
        showModal($('#bichectomiamodal'));
    });

	jQuery('#biopsiabtn').click(function(e) {
        showModal($('#biopsiamodal'));
    });

	jQuery('#blefaroplastiabtn').click(function(e) {
        showModal($('#blefaroplastiamodal'));
    });

	jQuery('#braquioplastiabtn').click(function(e) {
        showModal($('#braquioplastiamodal'));
    });

	jQuery('#browliftingbtn').click(function(e) {
        showModal($('#browliftingmodal'));
    });

	jQuery('#cantopexiabtn').click(function(e) {
        showModal($('#cantopexiamodal'));
    });

	jQuery('#mohsbtn').click(function(e) {
        showModal($('#mohsmodal'));
    });

	jQuery('#fasciabtn').click(function(e) {
        showModal($('#fasciamodal'));
    });

	jQuery('#cicatrizbtn').click(function(e) {
        showModal($('#cicatrizmodal'));
    });

	jQuery('#ginecomastiabtn').click(function(e) {
        showModal($('#ginecomastiamodal'));
    });

	jQuery('#diastasebtn').click(function(e) {
        showModal($('#diastasemodal'));
    });

	jQuery('#herniabtn').click(function(e) {
        showModal($('#herniamodal'));
    });

	jQuery('#herniaumbilicalbtn').click(function(e) {
        showModal($('#herniaumbilicalmodal'));
    });

	jQuery('#simastiabtn').click(function(e) {
        showModal($('#simastiamodal'));
    });

	jQuery('#enxertodegordurabtn').click(function(e) {
        showModal($('#enxertodegorduramodal'));
    });

	jQuery('#exeresebtn').click(function(e) {
        showModal($('#exeresemodal'));
    });

	jQuery('#impsobrancelhabtn').click(function(e) {
        showModal($('#impsobrancelhamodal'));
    });

    jQuery('#flancoplastiabtn').click(function(e) {
        showModal($('#flancoplastiamodal'));
    });

    jQuery('#liftinglabialbtn').click(function(e) {
        showModal($('#liftinglabialmodal'));
    });

    jQuery('#liftingpubisbtn').click(function(e) {
        showModal($('#liftingpubismodal'));
    });

    jQuery('#lipopapadabtn').click(function(e) {
        showModal($('#lipopapadamodal'));
    });

    jQuery('#lipopubisbtn').click(function(e) {
        showModal($('#lipopubismodal'));
    });

    jQuery('#mentoplastiabtn').click(function(e) {
        showModal($('#mentoplastiamodal'));
    });

    jQuery('#ninfoplastiabtn').click(function(e) {
        showModal($('#ninfoplastiamodal'));
    });

    jQuery('#ninfoplastiahibribtn').click(function(e) {
        showModal($('#ninfoplastiahibrimodal'));
    });

    jQuery('#otoplastiabtn').click(function(e) {
        showModal($('#otoplastiamodal'));
    });

    jQuery('#plexrbtn').click(function(e) {
        showModal($('#plexrmodal'));
    });

    jQuery('#panturrilhabtn').click(function(e) {
        showModal($('#panturrilhamodal'));
    });

    jQuery('#rinoplastiabtn').click(function(e) {
        showModal($('#rinoplastiamodal'));
    });

    jQuery('#rinoseptoplastiabtn').click(function(e) {
        showModal($('#rinoseptoplastiamodal'));
    });

    jQuery('#rotretalhobtn').click(function(e) {
        showModal($('#rotretalhomodal'));
    });

    jQuery('#vulvoplastiabtn').click(function(e) {
        showModal($('#vulvoplastiamodal'));
    });

    jQuery('#protesemamabtn').click(function(e) {
        showModal($('#protesemamamodal'));
    });

    jQuery('#dermolipectomiabtn').click(function(e) {
        showModal($('#dermolipectomiamodal'));
    });

    jQuery('#gluteoplastiabtn').click(function(e) {
        showModal($('#gluteoplastiamodal'));
    });

    jQuery('#impcapilarbtn').click(function(e) {
        showModal($('#impcapilarmodal'));
    });

    jQuery('#liftingcervicalbtn').click(function(e) {
        showModal($('#liftingcervicalmodal'));
    });

    jQuery('#liftingtercomediobtn').click(function(e) {
        showModal($('#liftingtercomediomodal'));
    });

    jQuery('#liftinggluteobtn').click(function(e) {
        showModal($('#liftinggluteomodal'));
    });

    jQuery('#liftingtemporalbtn').click(function(e) {
        showModal($('#liftingtemporalmodal'));
    });

    jQuery('#liftingtotalscbtn').click(function(e) {
        showModal($('#liftingtotalscmodal'));
    });

    jQuery('#lipoesculturabtn').click(function(e) {
        showModal($('#lipoesculturamodal'));
    });

    jQuery('#mastectomiabtn').click(function(e) {
        showModal($('#mastectomiamodal'));
    });

    jQuery('#mamoplastiaredutorabtn').click(function(e) {
        showModal($('#mamoplastiaredutoramodal'));
    });

    jQuery('#mastopexiabtn').click(function(e) {
        showModal($('#mastopexiamodal'));
    });

    jQuery('#ritidoplastiabtn').click(function(e) {
        showModal($('#ritidoplastiamodal'));
    });

    jQuery('#torsoplastiabtn').click(function(e) {
        showModal($('#torsoplastiamodal'));
    });

    jQuery('#trocadeprotesebtn').click(function(e) {
        showModal($('#trocadeprotesemodal'));
    });


	// ESTÉTICOS

	jQuery('#preenchedoresbtn').click(function(e) {
        showModal($('#preenchedoresmodal'));
    });
    
    jQuery('#botoxgluteobtn').click(function(e) {
        showModal($('#botoxgluteomodal'));
    });
    
    jQuery('#emagrecimentobtn').click(function(e) {
        showModal($('#emagrecimentomodal'));
    });
    
    jQuery('#botoxbtn').click(function(e) {
        showModal($('#botoxmodal'));
    });

    jQuery('#celulitebtn').click(function(e) {
        showModal($('#celulitemodal'));
    });

    jQuery('#prophililiftbtn').click(function(e) {
        showModal($('#prophililiftmodal'));
    });

    jQuery('#skinboosterbtn').click(function(e) {
        showModal($('#skinboostermodal'));
    });

	// OUTROS

    jQuery('#cancel').click(function(e) {
        hideModal();
    });
    jQuery('#cancelButton').click(function(e) {
        hideModal();
    });
    jQuery('#enter').click(function(e) {
        enterButtonModal();
    });
    jQuery('.modalCloseButton').click(function(e) {
        hideModal();
    });
    jQuery('.modal').keydown(function(event) {
        trapTabKey($(this), event);
    })
    jQuery('.modal').keydown(function(event) {
        trapEscapeKey($(this), event);
    })

});

function trapEscapeKey(obj, evt) {

    // if escape pressed
    if (evt.which == 27) {

        // get list of all children elements in given object
        var o = obj.find('*');

        // get list of focusable items
        var cancelElement;
        cancelElement = o.filter("#cancel")

        // close the modal window
        cancelElement.click();
        evt.preventDefault();
    }

}

function trapTabKey(obj, evt) {

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all children elements in given object
        var o = obj.find('*');

        // get list of focusable items
        var focusableItems;
        focusableItems = o.filter(focusableElementsString).filter(':visible')

        // get currently focused item
        var focusedItem;
        focusedItem = jQuery(':focus');

        // get the number of focusable items
        var numberOfFocusableItems;
        numberOfFocusableItems = focusableItems.length

        // get the index of the currently focused item
        var focusedItemIndex;
        focusedItemIndex = focusableItems.index(focusedItem);

        if (evt.shiftKey) {
            //back tab
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                focusableItems.get(numberOfFocusableItems - 1).focus();
                evt.preventDefault();
            }

        } else {
            //forward tab
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                focusableItems.get(0).focus();
                evt.preventDefault();
            }
        }
    }

}

function setInitialFocusModal(obj) {
    // get list of all children elements in given object
    var o = obj.find('*');

    // set focus to first focusable item
    var focusableItems;
    focusableItems = o.filter(focusableElementsString).filter(':visible').first().focus();

}

function enterButtonModal() {
    // BEGIN logic for executing the Enter button action for the modal window
    alert('form submitted');
    // END logic for executing the Enter button action for the modal window
    hideModal();
}

function setFocusToFirstItemInModal(obj){
    // get list of all children elements in given object
    var o = obj.find('*');

    // set the focus to the first keyboard focusable item
    o.filter(focusableElementsString).filter(':visible').first().focus();
}

function showModal(obj) {

  jQuery('#mainPage').attr('aria-hidden', 'true'); // mark the main page as hidden
  jQuery('#modalOverlay').css('display', 'block'); // insert an overlay to prevent clicking and make a visual change to indicate the main apge is not available
    jQuery(obj).css('display', 'block'); // make the modal window visible
    jQuery(obj).attr('aria-hidden', 'false'); // mark the modal window as visible

    // attach a listener to redirect the tab to the modal window if the user somehow gets out of the modal window
    jQuery('body').on('focusin','#mainPage',function() {
        setFocusToFirstItemInModal(jQuery('#modal'));
    })

    // save current focus
    focusedElementBeforeModal = jQuery(':focus');

    setFocusToFirstItemInModal(obj);
}

function hideModal() {
    jQuery('#modalOverlay').css('display', 'none'); // remove the overlay in order to make the main screen available again
    jQuery('#modal').css('display', 'none'); // hide the modal window
    jQuery('#modal').css('display', 'none'); // hide the modal window
    jQuery('.modalprocedimento').css('display', 'none'); // hide the modal window
    jQuery('.modalprocedimento').attr('aria-hidden', 'true'); // mark the modal window as hidden
    jQuery('#mainPage').attr('aria-hidden', 'false'); // mark the main page as visible

    // remove the listener which redirects tab keys in the main content area to the modal
    jQuery('body').off('focusin','#mainPage');

    // set focus back to element that had it before the modal was opened
    focusedElementBeforeModal.focus();
}


$('.circle').on('click',function(){
	var animClass = $(this).data('animation');
	var removeTime = $(this).data('remove');
	if($(this).hasClass(animClass)){
	   $(this).removeClass(animClass);
	}else{
	  $(this).addClass(animClass);
	  if(typeof removeTime != 'undefined'){
		var el = $(this);
		 setTimeout(function(){
		   el.removeClass(animClass);
		 },removeTime);
	  }
	}
  });