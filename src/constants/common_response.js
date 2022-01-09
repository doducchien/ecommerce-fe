export const commonResponse = (response) => {
    let { data, message, statusCode } = response;
    // TODO
    var statusRequest = null;
    switch (statusCode) {
        case 200: {
            statusRequest = true;
        }
        case 201: {
            statusRequest = true;
            break;
        }
        // case 204: {
        //     statusRequest = false;
        //     message = ""

        // }

        default: {
            statusRequest = false;
        }
    }
    const payload = { statusRequest, data, message, statusCode }

    return payload;
}