import {nanoid} from "nanoid";

/**
 * 生成uuid
 * @param {number} size - id的长度
 * @return {string} 生成的id
 */
export const generateId = (size?:number): string => {
    return nanoid(size)
}