import { createNavigationContainerRef } from "@react-navigation/core";

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}