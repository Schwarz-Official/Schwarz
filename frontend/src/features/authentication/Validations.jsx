export const validateEmail = (newEmail) => {
    if (newEmail === "") {
        return "This is a required field";
    } else if (!newEmail.includes("@")) {
        return "Email should contain the '@' symbol";
    } else {
        return "";
    }
};

export const validateFirstName = (newFirstName) => {
    if (newFirstName.trim() === "") {
        return "This is a required field";
    } else {
        return "";
    }
};

export const validateLastName = (newLastName) => {
    if (newLastName.trim() === "") {
        return "This is a required field";
    } else {
        return "";
    }
};

export const validatePassword = (newPassword, firstName, lastName, email) => {
    const hasMinLength = newPassword.length >= 8
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const hasNoEmailFirstNameLastName = !newPassword.toLowerCase().includes(email.toLowerCase()) &&
        !newPassword.toLowerCase().includes(firstName.toLowerCase()) &&
        !newPassword.toLowerCase().includes(lastName.toLowerCase());

    return {
        hasMinLength,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialCharacter,
        hasNoEmailFirstNameLastName
    };
};

export const validateConfirmPassword = (newRePassword, password) => {
    if (newRePassword !== password) {
        return "Passwords do not match";
    } else {
        return "";
    }
};

export const validateDate = (newDate) => {
    if (!newDate.trim()) {
         return "This field is required";
    } else {
        return "";
    }
};
export const validateGender = (newGender) => {
    if (!newGender.trim()) {
        return "This field is required";
    } else {
        return "";
    }
};

export const validateAddress = (newAddress) => {
    if (!newAddress.trim()) {
        return "This field is required";
    } else {
        return "";
    }
};

export const validateLanguage = (newLang) => {
    if (!newLang.trim()) {
        return "This field is required";
    } else {
        return "";
    }
};

export const validateCompany = (newCompany) => {
    if (!newCompany.trim()) {
        return "This field is required";
    } else {
        return "";
    }
}

export const validateJobTitle = (newJobTitle) => {
    if (!newJobTitle.trim()) {
        return "This field is required";
    } else {
        return "";
    }
}

export const validateIndustry = (newIndustry) => {
    if (!newIndustry.trim()) {
        return "This field is required";
    } else {
        return "";
    }
}

export const validateExperience = (newExperience) => {
    if (!newExperience.trim()) {
        return "This field is required";
    } else {
        return "";
    }
}