(function($) {
    'use strict';
    
    let currentStep = 1;
    const totalSteps = 7;
    
    $(document).ready(function() {
        initForm();
    });
    
    function initForm() {
        // Handle option buttons
        $(document).on('click', '.fobet-option-btn', function() {
            const $btn = $(this);
            const $step = $btn.closest('.fobet-form-step');
            const $input = $step.find('input[type="hidden"]');
            const value = $btn.data('value');
            
            // Remove selected class from siblings
            $btn.siblings('.fobet-option-btn').removeClass('selected');
            
            // Add selected class
            $btn.addClass('selected');
            
            // Set hidden input value
            $input.val(value);
            
            // Auto advance to next step after selection
            setTimeout(function() {
                nextStep();
            }, 300);
        });
        
        // Handle next button
        $(document).on('click', '.fobet-btn-next', function(e) {
            e.preventDefault();
            nextStep();
        });
        
        // Handle back button
        $(document).on('click', '.fobet-btn-back', function(e) {
            e.preventDefault();
            prevStep();
        });
        
        // Handle enter key
        $(document).on('keypress', '.fobet-form-input', function(e) {
            if (e.which === 13) {
                e.preventDefault();
                const $step = $(this).closest('.fobet-form-step');
                if (validateStep($step)) {
                    nextStep();
                }
            }
        });
        
        // Handle form submission
        $('#fobetConsultationForm').on('submit', function(e) {
            e.preventDefault();
            submitForm();
        });
    }
    
    function nextStep() {
        const $currentStep = $('[data-step="' + currentStep + '"]');
        
        if (!validateStep($currentStep)) {
            return;
        }
        
        if (currentStep < totalSteps) {
            // Hide current step
            $currentStep.removeClass('active');
            
            // Update progress
            $('.fobet-progress-step[data-step="' + currentStep + '"]').removeClass('active');
            
            // Increment step
            currentStep++;
            
            // Show next step
            $('[data-step="' + currentStep + '"]').addClass('active');
            
            // Update progress
            $('.fobet-progress-step[data-step="' + currentStep + '"]').addClass('active');
            
            // Scroll to top
            $('html, body').animate({
                scrollTop: $('.fobet-consultation-container').offset().top - 50
            }, 300);
            
            // Focus first input
            setTimeout(function() {
                $('[data-step="' + currentStep + '"] .fobet-form-input').first().focus();
            }, 100);
        }
    }
    
    function prevStep() {
        if (currentStep > 1) {
            // Hide current step
            $('[data-step="' + currentStep + '"]').removeClass('active');
            
            // Update progress
            $('.fobet-progress-step[data-step="' + currentStep + '"]').removeClass('active');
            
            // Decrement step
            currentStep--;
            
            // Show previous step
            $('[data-step="' + currentStep + '"]').addClass('active');
            
            // Update progress
            $('.fobet-progress-step[data-step="' + currentStep + '"]').addClass('active');
            
            // Scroll to top
            $('html, body').animate({
                scrollTop: $('.fobet-consultation-container').offset().top - 50
            }, 300);
        }
    }
    
    function validateStep($step) {
        let isValid = true;
        
        // Validate text inputs
        $step.find('.fobet-form-input[required]').each(function() {
            const $input = $(this);
            if (!$input.val().trim()) {
                $input.focus();
                showError('Please fill in this field');
                isValid = false;
                return false;
            }
        });
        
        // Validate hidden inputs (for option selections)
        $step.find('input[type="hidden"][required]').each(function() {
            const $input = $(this);
            if (!$input.val()) {
                showError('Please select an option');
                isValid = false;
                return false;
            }
        });
        
        return isValid;
    }
    
    function submitForm() {
        const $form = $('#fobetConsultationForm');
        const formData = new FormData($form[0]);
        
        // Add AJAX parameters - FIXED ACTION NAME
        formData.append('action', 'fobet_apt_submit_consultation');
        formData.append('nonce', fobetAPT.nonce);
        
        // Show loading
        $('.fobet-form-step.active').hide();
        $('.fobet-form-loading').show();
        
        // Submit via AJAX
        $.ajax({
            url: fobetAPT.ajax_url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    // Redirect to WhatsApp
                    window.location.href = response.data.whatsapp_url;
                } else {
                    $('.fobet-form-loading').hide();
                    $('.fobet-form-step.active').show();
                    showError(response.data.message || 'Something went wrong. Please try again.');
                }
            },
            error: function() {
                $('.fobet-form-loading').hide();
                $('.fobet-form-step.active').show();
                showError('Connection error. Please try again.');
            }
        });
    }
    
    function showError(message) {
        alert(message);
    }
    
})(jQuery);
