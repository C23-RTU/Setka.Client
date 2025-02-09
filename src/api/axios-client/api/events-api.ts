/* tslint:disable */
/* eslint-disable */
/**
 * My Title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { EventDTO } from '../models';
// @ts-ignore
import type { EventDetailDTO } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {EventDTO} eventDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsCreate: async (eventDTO: EventDTO, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventDTO' is not null or undefined
            assertParamExists('eventsCreate', 'eventDTO', eventDTO)
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(eventDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsDeleteById: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eventsDeleteById', 'id', id)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetAll: async (pageIndex?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageIndex !== undefined) {
                localVarQueryParameter['PageIndex'] = pageIndex;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} date 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetByDate: async (date: string, pageIndex?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'date' is not null or undefined
            assertParamExists('eventsGetByDate', 'date', date)
            const localVarPath = `/events/getByDate/{date}`
                .replace(`{${"date"}}`, encodeURIComponent(String(date)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageIndex !== undefined) {
                localVarQueryParameter['PageIndex'] = pageIndex;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetById: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eventsGetById', 'id', id)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {EventDTO} eventDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsCreate(eventDTO: EventDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsCreate(eventDTO, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsDeleteById(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsDeleteById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsDeleteById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsGetAll(pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventDetailDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsGetAll(pageIndex, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsGetAll']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} date 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsGetByDate(date: string, pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventDetailDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsGetByDate(date, pageIndex, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsGetByDate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsGetById(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventDetailDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsGetById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * 
         * @param {EventDTO} eventDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsCreate(eventDTO: EventDTO, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.eventsCreate(eventDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsDeleteById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.eventsDeleteById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetAll(pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<EventDetailDTO>> {
            return localVarFp.eventsGetAll(pageIndex, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} date 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetByDate(date: string, pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<EventDetailDTO>> {
            return localVarFp.eventsGetByDate(date, pageIndex, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsGetById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<EventDetailDTO> {
            return localVarFp.eventsGetById(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventsApi - interface
 * @export
 * @interface EventsApi
 */
export interface EventsApiInterface {
    /**
     * 
     * @param {EventDTO} eventDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsCreate(eventDTO: EventDTO, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsDeleteById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsGetAll(pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<EventDetailDTO>>;

    /**
     * 
     * @param {string} date 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsGetByDate(date: string, pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<EventDetailDTO>>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsGetById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<EventDetailDTO>;

}

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI implements EventsApiInterface {
    /**
     * 
     * @param {EventDTO} eventDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsCreate(eventDTO: EventDTO, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsCreate(eventDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsDeleteById(id: number, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsDeleteById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsGetAll(pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsGetAll(pageIndex, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} date 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsGetByDate(date: string, pageIndex?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsGetByDate(date, pageIndex, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsGetById(id: number, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsGetById(id, options).then((request) => request(this.axios, this.basePath));
    }
}

