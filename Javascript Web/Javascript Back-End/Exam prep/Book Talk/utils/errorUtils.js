function getFirstValidationError(error) {
    const firstError = Object.values(error.errors)[0].message;

    return firstError;
}

exports.getErrorMessage = (error) => {
    switch (error.name) {
        case "Error":
            return error.message;
        case "ValidationError":
            return getFirstValidationError(error);
        default:
            return error.message;
    }
}