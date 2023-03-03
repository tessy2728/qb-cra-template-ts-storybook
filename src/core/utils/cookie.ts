export function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts:string[] = value?.split(`; ${name}=`) ?? [];
    if (parts && parts.length === 2) 
        return parts?.pop()?.split(';')?.shift();
    return null;
}