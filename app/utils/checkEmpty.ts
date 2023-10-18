export default function checkEmpty(maybeUndeclared: any) {
    if (typeof maybeUndeclared !== "undefined" && (typeof maybeUndeclared !== "object" || !maybeUndeclared)) {
        return maybeUndeclared
    }
    return 0
}
