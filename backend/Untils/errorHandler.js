    class ErrorHandler extends Error {
        constructor(message, statusCode) {
            this.statusCode = statusCode;
            super(message);
            Error.captureStackTrace(this, this.constructor);
        }
    }
  
    const errorMiddleware = (err, req, res, next) => {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
    
        if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors).map((val) => val.message).join(", ");
        }
    
        res.status(statusCode).json({
        success: false,
        message,
        });
    };
  
  export { ErrorHandler, errorMiddleware };
  