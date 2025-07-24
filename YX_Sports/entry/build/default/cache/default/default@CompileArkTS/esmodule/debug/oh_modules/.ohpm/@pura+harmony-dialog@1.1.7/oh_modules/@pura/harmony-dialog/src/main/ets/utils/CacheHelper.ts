import util from "@ohos:util";
/**
 * TODO LRUCache缓存工具类
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/05/01
 */
export class CacheHelper {
    private static lruCache: util.LRUCache<string, Object> = new util.LRUCache(64);
    static readonly CACHE_LABEL: string = "dialog_cache_"; //缓存key的头部字符串。
    /**
     * 获取key对应的缓存
     */
    public static get<T>(key: string): T {
        return CacheHelper.lruCache.get(key) as T;
    }
    /**
     * 添加缓存到lruCache中
     */
    public static put(key: string, value: Object) {
        CacheHelper.lruCache.put(key, value);
    }
    /**
     * 删除key对应的缓存
     */
    public static remove(key: string) {
        CacheHelper.lruCache.remove(key);
    }
    /**
     * 判断是否包含key对应的缓存
     */
    public static has(key: string): boolean {
        return CacheHelper.lruCache.contains(key);
    }
    /**
     * 判断lruCache缓存是否为空
     * @returns
     */
    public static isEmpty(): boolean {
        return CacheHelper.lruCache.isEmpty();
    }
    /**
     * 获取当前缓冲区的容量。
     * @returns
     */
    public static getCapacity(): number {
        console.error(JSON.stringify(CacheHelper.lruCache, null, 2));
        return CacheHelper.lruCache.getCapacity();
    }
    /**
     * 重新设置lruCache的容量
     * @param newCapacity
     */
    public static updateCapacity(newCapacity: number) {
        CacheHelper.lruCache.updateCapacity(newCapacity);
    }
    /**
     * 清除缓存数据，并重置lruCache的大小
     */
    public static clear() {
        CacheHelper.lruCache.clear();
        CacheHelper.lruCache.updateCapacity(64);
    }
}
