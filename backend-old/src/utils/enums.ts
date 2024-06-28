const config = {
  RESPONSE_STATUS: {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    PAYMENT_REQUIRED: 402,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    ACCESS_DENIED: 440,
    INTERNAL_ERROR: 500,
  },
  RESPONSE_MESSAGE: {
    SUCCESS: "Success",
    CREATED: "Created",
    BAD_REQUEST: "Bad Request",
    PAYMENT_REQUIRED: "Payment Required",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    UNPROCESSABLE_ENTITY: "Unprocessable Entity",
    ACCESS_DENIED: "Access Denied",
    INTERNAL_ERROR: "Internal Error",
  },
  WEEKDAYS: {
    SUNDAY: "sunday",
    MONDAY: "monday",
    TUESDAY: "tuesday",
    WEDNESDAY: "wednesday",
    THURSDAY: "thursday",
    FRIDAY: "friday",
    SATURDAY: "saturday",
  },
  AI_MODELS: {
    GEMINI: {
      TEXT_GENERATION: "gemini-1.5-flash",
    },
  },
  TIMEZONES: {
    UTC: {
      time_difference: "Z",
      time_zone: "UTC",
    },
    GMT: {
      time_difference: "Z",
      time_zone: "GMT",
    },
    IST: {
      time_difference: "+05:30",
      time_zone: "IST",
    },
    EST: {
      time_difference: "-05:00",
      time_zone: "EST",
    },
    CST: {
      time_difference: "-06:00",
      time_zone: "CST",
    },
    PST: {
      time_difference: "-08:00",
      time_zone: "PST",
    },
    MST: {
      time_difference: "-07:00",
      time_zone: "MST",
    },
    AST: {
      time_difference: "-04:00",
      time_zone: "AST",
    },
    HST: {
      time_difference: "-10:00",
      time_zone: "HST",
    },
  },
  PRIORITY_TYPES: {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
  },
};

export default config;
