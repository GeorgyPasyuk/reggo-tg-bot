import {cameraQuery} from "@callback-query/camera/cameraSelectQuery";
import {wifiQuery} from "@callback-query/camera/wifi/wifiQuery";
import {babysitterQuery} from "@callback-query/camera/babysitter/babysitterQuery";
import {fourGQuery} from "@callback-query/camera/fourG/fourGQuery";
import {faqQuery} from "@callback-query/faq/faqQuery";
import {requirementsQuery} from "@callback-query/requirements/requirementsQuery";
import {cloudQuery} from "@callback-query/cloud/cloudQuery";
export const connectCallbackQueries = () => {
    cameraQuery()
    wifiQuery()
    fourGQuery()
    babysitterQuery()
    cloudQuery()
    faqQuery()
    requirementsQuery()
};