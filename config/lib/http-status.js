const httpStatusCodes = {
  informational_1xx: {
    continue_100: {
      code: 100,
      message: 'Continue'
    },
    switching_protocols_101: {
      code: 101,
      message: 'Switching Protocols'
    },
    processing_webdav_102: {
      code: 102,
      message: 'Processing (WebDAV)'
    }
  },
  success_2xx: {
    _ok_200: {
      code: 200,
      message: 'OK'
    },
    _created_201: {
      code: 201,
      message: 'Created'
    },
    accepted_202: {
      code: 202,
      message: 'Accepted'
    },
    non_authoritative_information_203: {
      code: 203,
      message: 'Non - Authoritative Information'
    },
    _no_content_204: {
      code: 204,
      message: 'No Content'
    },
    reset_content_205: {
      code: 205,
      message: 'Reset Content'
    },
    partial_content_206: {
      code: 206,
      message: 'Partial Content'
    },
    multi_status_webdav_207: {
      code: 207,
      message: 'Multi - Status (WebDAV)'
    },
    already_reported_webdav_208: {
      code: 208,
      message: 'Already Reported (WebDAV)'
    },
    im_used_226: {
      code: 226,
      message: 'IM Used'
    }
  },
  redirection_3xx: {
    multiple_choices_300: {
      code: 300,
      message: 'Multiple Choices'
    },
    moved_permanently_301: {
      code: 301,
      message: 'Moved Permanently'
    },
    found_302: {
      code: 302,
      message: 'Found'
    },
    see_other_303: {
      code: 303,
      message: 'See Other'
    },
    _not_modified_304: {
      code: 304,
      message: 'Not Modified'
    },
    use_proxy_305: {
      code: 305,
      message: 'Use Proxy'
    },
    unused_306: {
      code: 306,
      message: '(Unused)'
    },
    temporary_redirect_307: {
      code: 307,
      message: 'Temporary Redirect'
    },
    permanent_redirect_experimental_308: {
      code: 308,
      message: 'Permanent Redirect (experimental)'
    }
  },
  client_Error_4xx: {
    _bad_request_400: {
      code: 400,
      message: 'Bad Request'
    },
    _unauthorized_401: {
      code: 401,
      message: 'Unauthorized'
    },
    payment_required_402: {
      code: 402,
      message: 'Payment Required'
    },
    _forbidden_403: {
      code: 403,
      message: 'Forbidden'
    },
    _not_found_404: {
      code: 404,
      message: 'Not Found'
    },
    method_not_allowed_405: {
      code: 405,
      message: 'Method Not Allowed'
    },
    not_acceptable_406: {
      code: 406,
      message: 'Not Acceptable'
    },
    proxy_authentication_required_407: {
      code: 407,
      message: 'Proxy Authentication Required'
    },
    request_timeout_408: {
      code: 408,
      message: 'Request Timeout'
    },
    _conflict_409: {
      code: 409,
      message: 'Conflict'
    },
    gone_410: {
      code: 410,
      message: 'Gone'
    },
    length_required_411: {
      code: 411,
      message: 'Length Required'
    },
    precondition_failed_412: {
      code: 412,
      message: 'Precondition Failed'
    },
    request_entity_too_large_413: {
      code: 413,
      message: 'Request Entity Too Large'
    },
    request_uri_too_long_414: {
      code: 414,
      message: 'Request - URI Too Long'
    },
    unsupported_media_type_415: {
      code: 415,
      message: 'Unsupported Media Type'
    },
    requested_range_not_satisfiable_416: {
      code: 416,
      message: 'Requested Range Not Satisfiable'
    },
    expectation_failed_417: {
      code: 417,
      message: 'Expectation Failed'
    },
    im_a_teapot_rfc_2324_418: {
      code: 418,
      message: 'I\'m a teapot(RFC 2324)'
    },
    enhance_your_calm_twitter_420: {
      code: 420,
      message: 'Enhance Your Calm (Twitter)'
    },
    unprocessable_entity_webdav_422: {
      code: 422,
      message: 'Unprocessable Entity (WebDAV)'
    },
    locked_webdav_423: {
      code: 423,
      message: 'Locked (WebDAV)'
    },
    failed_dependency_webdav_424: {
      code: 424,
      message: 'Failed Dependency (WebDAV)'
    },
    reserved_for_webdav_425: {
      code: 425,
      message: 'Reserved for WebDAV'
    },
    upgrade_required_426: {
      code: 426,
      message: 'Upgrade Required'
    },
    precondition_required_428: {
      code: 428,
      message: 'Precondition Required'
    },
    too_many_requests_429: {
      code: 429,
      message: 'Too Many Requests'
    },
    request_header_fields_too_large_431: {
      code: 431,
      message: 'Request Header Fields Too Large'
    },
    no_response_nginx_444: {
      code: 444,
      message: 'No Response (Nginx)'
    },
    retry_with_microsoft_449: {
      code: 449,
      message: 'Retry With (Microsoft)'
    },
    blocked_by_windows_parental_controls_microsoft_450: {
      code: 450,
      message: 'Blocked by Windows Parental Controls (Microsoft)'
    },
    unavailable_for_legal_reasons_451: {
      code: 451,
      message: 'Unavailable For Legal Reasons'
    },
    client_closed_request_nginx_499: {
      code: 499,
      message: 'Client Closed Request (Nginx)'
    }
  },
  server_Error_5xx: {
    _internal_server_error_500: {
      code: 500,
      message: 'Internal Server Error'
    },
    not_implemented_501: {
      code: 501,
      message: 'Not Implemented'
    },
    bad_gateway_502: {
      code: 502,
      message: 'Bad Gateway'
    },
    service_unavailable_503: {
      code: 503,
      message: 'Service Unavailable'
    },
    gateway_timeout_504: {
      code: 504,
      message: 'Gateway Timeout'
    },
    http_version_not_supported_505: {
      code: 505,
      message: 'HTTP Version Not Supported'
    },
    variant_also_negotiates_experimental_506: {
      code: 506,
      message: 'Variant Also Negotiates (Experimental)'
    },
    insufficient_storage_webdav_507: {
      code: 507,
      message: 'Insufficient Storage (WebDAV)'
    },
    loop_detected_webdav_508: {
      code: 508,
      message: 'Loop Detected (WebDAV)'
    },
    bandwidth_limit_exceeded_apache_509: {
      code: 509,
      message: 'Bandwidth Limit Exceeded (Apache)'
    },
    not_extended_510: {
      code: 510,
      message: 'Not Extended'
    },
    network_authentication_required_511: {
      code: 511,
      message: 'Network Authentication Required'
    },
    network_read_timeout_error_598: {
      code: 598,
      message: 'Network read timeout error'
    },
    network_connect_timeout_error_599: {
      code: 599,
      message: 'Network connect timeout error'
    }
  }
};

module.exports = httpStatusCodes;