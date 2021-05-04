import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string): any {
        const messageOptions = {
            required: `Field is required.`,
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            invalidEmailAddress: 'Invalid email address',
            maxlength: `The field can't contain more than ${validatorValue.requiredLength} characters.`,
            minlength: `The field must contain atleast ${validatorValue.requiredLength} characters.`
        };

        return messageOptions[validatorName];
    }
}