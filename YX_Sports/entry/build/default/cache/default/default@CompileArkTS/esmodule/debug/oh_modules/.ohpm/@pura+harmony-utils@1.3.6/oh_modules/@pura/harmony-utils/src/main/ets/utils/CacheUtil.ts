import { ObjectUtil } from "@normalized:N&&&@pura/harmony-utils/src/main/ets/utils/ObjectUtil&1.3.6";
/**
 * TODO 缓存工具类
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/05/01
 */
export class CacheUtil {
    private static cache: Record<string, Object> = {}; //私有缓存对象
    /**
     * 获取缓存中的数据
     * @param key 存入的key
     * @returns
     */
    static get<T>(key: string): T {
        return CacheUtil.cache[key] as T;
    }
    /**
     * 将数据存入缓存中
     * @param key 存入key
     * @param value 存入数据
     */
    static put<T>(key: string, value: T): void {
        CacheUtil.cache[key] = value as Object;
    }
    /**
     * 删除对应的缓存
     */
    static remove(key: string) {
        ObjectUtil.deleteRecord(CacheUtil.cache, key);
    }
    /**
     * 缓存中的数据是否存在
     * @param key 存入的key
     * @returns
     */
    static has(key: string): boolean {
        let keys = Object.keys(CacheUtil.cache);
        return keys.indexOf(key) >= 0;
    }
    /**
     * 判断缓存是否为空
     * @returns
     */
    static isEmpty(): boolean {
        let keys = Object.keys(CacheUtil.cache);
        return keys.length <= 0;
    }
    /**
     * 清除缓存数据
     */
    static clear(): void {
        CacheUtil.cache = {};
    }
}
