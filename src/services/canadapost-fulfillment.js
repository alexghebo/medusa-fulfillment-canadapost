import { FulfillmentService } from "medusa-interfaces"

class CanadaPostFulfillmentService extends FulfillmentService {
    static identifier = "canadapost"

    constructor() {
        super()
    }

    getFulfillmentOptions() {
        return [
            {
                id: "canadapost-fulfillment",
            },
            {
                id: "canadapost-fulfillment-return",
                is_return: true,
            },
        ]
    }

    validateFulfillmentData(_, data, cart) {
        return data
    }

    validateOption(data) {
        return true
    }

    canCalculate() {
        return true
    }

    calculatePrice() {
        //throw Error("Manual Fulfillment service cannot calculatePrice")
        return 10;
    }

    createOrder() {
        // No data is being sent anywhere
        return Promise.resolve({})
    }

    createReturn() {
        // No data is being sent anywhere
        return Promise.resolve({})
    }

    createFulfillment() {
        // No data is being sent anywhere
        return Promise.resolve({})
    }

    cancelFulfillment() {
        return Promise.resolve({})
    }
}

export default CanadaPostFulfillmentService