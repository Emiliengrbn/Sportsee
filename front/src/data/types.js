/**
 * @typedef {Object} User
 * @property {Number} id
 * @property {Object} userInfos
 * @property {String} userInfos.firstName
 * @property {String} userInfos.lastName
 * @property {Number} userInfos.age
 * @property {Number} todayScore
 * @property {Object} keyData
 * @property {Number}  keyData.calorieCount
 * @property {Number} keyData.proteinCount
 * @property {Number} keyData.carbohydrateCount
 * @property {Number} keyData.lipidCount
 */

/**
 * @typedef {Object} UserActivity
 * @property {Number} userId
 * @property {Array<{day: string, kilogram: number, calories: number}>} sessions
 */

/**
 * @typedef {Object} UserSessions
 * @property {Number} userId
 * @property {Array<{day: number, sessionLength: number}>} sessions
 */

/**
 * @typedef {Object} UserPerformance
 * @property {number} userId
 * @property {{[key: number]: string}} kind
 * @property {Array<{value: number, kind: number}>} data
 */
