export enum KpiActions {
    LOADING_KPI_CREATION_OR_FETCHING = "LOADING_KPI_CREATION_OR_FETCHING", 
    KPI_CREATED = "KPI_CREATED",
    KPI_FETCHED = "KPI_FETCHED",
    KPIS_FETCHED = "KPIS_FETCHED",
    KPI_UPDATED = "KPI_UPDATED",
    KPI_ERROR =  "KPI_ERROR",
    CLEAR = "CLEAR",
}


export enum PymeActions {
    LOADING_PYME_CREATION_OR_FETCHING = "LOADING_PYME_CREATION_OR_FETCHING",
    PYME_CREATED = "PYME_CREATED",
    PYME_FETCHED = "PYME_FETCHED",
    PYMES_FETCHED = "PYMES_FETCHED",
    PYME_UPDATED = "PYME_UPDATED",
    PYME_ERROR = "PYME_ERROR",
    CLEAR = "CLEAR",
}

export enum UserActions {
    LOADING_USER_CREATION_OR_FETCHING = "LOADING_USER_CREATION_OR_FETCHING", 
    USER_CREATED = "USER_CREATED",
    USER_FETCHED = "USER_FETCHED",
    USER_UPDATED = "USER_UPDATED",
    USER_ERROR =  "USER_ERROR",
    CLEAR = "CLEAR",
}

export enum NavBarActions {
    OPEN = "OPEN", 
    COLLAPSE = "COLLAPSE",
    CLEAR = "CLEAR",
}

export enum FileUploadActions {
    UPLOADED = "UPLOADED", 
    UPLOADING = "UPLOADING",
    CLEAR = "CLEAR",
}

export enum LoginActions {
    ACCEPTED = "ACCEPTED", 
    DECLINED = "DECLINED",
    ATTEMPT = "ATTEMPT",
    FINISHED_OK = "FINISHED_OK",
    CLEAR = "CLEAR",
}
