import {useEffect} from "react";

const useLinkIcon = (icon:string) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = icon;
        // 移除旧的图标元素
        const oldLink = document.querySelector('link[rel="icon"]');
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        // 将新的图标元素添加到 head 中
        document.head.appendChild(link);
    }, [icon]);
}
export default useLinkIcon