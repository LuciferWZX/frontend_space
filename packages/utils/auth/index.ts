import {nanoid} from "nanoid";

/**
 * 生成uuid
 * @param size
 */
export const generateId = (size?:number) => {
    return nanoid(size)
}