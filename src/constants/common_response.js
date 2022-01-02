export const commonResponse = (response) => {
    const { data, message, statusCode } = response;
    // TODO
    var statusRequest = null;
    switch (statusCode) {
        case 200: {
            statusRequest = true;
            break;
        }

        default: {
            statusRequest = false;
        }
    }
    const payload = { statusRequest, data, message, statusCode }

    return payload;
}