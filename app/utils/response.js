export const successResponse = (res, message, data = null, code = 200) => {
    return res.status(code).json({
        status: true,
        code,
        message,
        data,
    });
};

export const errorResponse = (res, message, errors = null, code = 400) => {
    return res.status(code).json({
        status: false,
        code,
        message,
        errors,
    });
};
