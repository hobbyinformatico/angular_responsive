export class Utils {
    static isMobile(window: any) {
        return {
            'mode': window.innerWidth < window.innerHeight ? 'mobile' : 'desktop',
            'width': window.innerWidth,
            'height': window.innerHeight
        };
    }
}