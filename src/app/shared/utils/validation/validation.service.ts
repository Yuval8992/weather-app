import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string): any {
        const messageOptions = {
            required: `required field.`,
            maxlength: `The field can't contain more than ${validatorValue?.requiredLength} characters.`,
            minlength: `The field must contain atleast ${validatorValue?.requiredLength} characters.`
        };

        return messageOptions[validatorName];
    }
}