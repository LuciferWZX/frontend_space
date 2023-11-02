/**
 *
 * @param {Function} fn - 运行的函数
 * @returns [T|undefined,E|undefined|Error] 返回的结果
 */
export const miniCatch = <T = undefined, E = Error>(
  fn: Function
): [T | undefined, E | undefined | Error] => {
  const result: [T | undefined, E | undefined | Error] = [undefined, undefined];

  try {
    result[0] = fn();
  } catch (e) {
    if (e instanceof Error) {
      result[1] = e;
    } else {
      result[1] = e as E;
    }
  }
  return result;
};
