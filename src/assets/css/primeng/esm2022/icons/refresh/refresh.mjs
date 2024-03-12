import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/baseicon';
import { UniqueComponentId } from 'primeng/utils';
import * as i0 from "@angular/core";
export class RefreshIcon extends BaseIcon {
    pathId;
    ngOnInit() {
        this.pathId = 'url(#' + UniqueComponentId() + ')';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: RefreshIcon, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: RefreshIcon, isStandalone: true, selector: "RefreshIcon", usesInheritance: true, ngImport: i0, template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: RefreshIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'RefreshIcon',
                    standalone: true,
                    imports: [BaseIcon],
                    template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pY29ucy9yZWZyZXNoL3JlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXdCbEQsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFRO0lBQ3JDLE1BQU0sQ0FBUztJQUVmLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN0RCxDQUFDO3VHQUxRLFdBQVc7MkZBQVgsV0FBVyw4RkFsQlY7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQlQ7OzJGQUVRLFdBQVc7a0JBdEJ2QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQlQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAncHJpbWVuZy9iYXNlaWNvbic7XG5pbXBvcnQgeyBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1JlZnJlc2hJY29uJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtCYXNlSWNvbl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJhcmlhSGlkZGVuXCIgW2F0dHIucm9sZV09XCJyb2xlXCIgW2NsYXNzXT1cImdldENsYXNzTmFtZXMoKVwiPlxuICAgICAgICAgICAgPGcgW2F0dHIuY2xpcC1wYXRoXT1cInBhdGhJZFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk02Ljc3MDUxIDUuOTYzMzZDNi44NDMyNCA1Ljk5MzU1IDYuOTIxMjcgNi4wMDg5MSA3LjAwMDAyIDYuMDA4NTRDNy4wNzg3NyA2LjAwODkxIDcuMTU2OCA1Ljk5MzU1IDcuMjI5NTMgNS45NjMzNkM3LjMwMjI2IDUuOTMzMTcgNy4zNjgyMyA1Ljg4ODc2IDcuNDIzNTcgNS44MzI3M0w5LjgyMTAxIDMuNDM1MjlDOS45MzMyNSAzLjMyMjkxIDkuOTk2MjkgMy4xNzA1OCA5Ljk5NjI5IDMuMDExNzVDOS45OTYyOSAyLjg1MjkyIDkuOTMzMjUgMi43MDA1OCA5LjgyMTAxIDIuNTg4Mkw3LjQyMzU3IDAuMTkwNzYzQzcuMzY4NyAwLjEzMTg3NiA3LjMwMjUzIDAuMDg0NjQ1MSA3LjIyOTAxIDAuMDUxODg2NUM3LjE1NTQ5IDAuMDE5MTI4IDcuMDc2MTIgMC4wMDE1MTMxOSA2Ljk5NTY0IDkuMzI3NzJlLTA1QzYuOTE1MTcgLTAuMDAxMzI2NjMgNi44MzUyMyAwLjAxMzQ3NzMgNi43NjA2IDAuMDQzNjIxOEM2LjY4NTk3IDAuMDczNzY2NCA2LjYxODE3IDAuMTE4NjM0IDYuNTYxMjYgMC4xNzU1NDhDNi41MDQzNSAwLjIzMjQ2MiA2LjQ1OTQ4IDAuMzAwMjU3IDYuNDI5MzMgMC4zNzQ4ODhDNi4zOTkxOSAwLjQ0OTUxOSA2LjM4NDM5IDAuNTI5NDU2IDYuMzg1ODEgMC42MDk5MzNDNi4zODcyMiAwLjY5MDQwOSA2LjQwNDg0IDAuNzY5Nzc1IDYuNDM3NiAwLjg0MzI5NkM2LjQ3MDM2IDAuOTE2ODE3IDYuNTE3NTkgMC45ODI5ODYgNi41NzY0NyAxLjAzNzg2TDcuOTUxMDMgMi40MTI0MUg2Ljk5OTk4QzUuNDYzMzcgMi40MTI0MSAzLjk4OTY5IDMuMDIyODMgMi45MDMxNCA0LjEwOTM4QzEuODE2NTkgNS4xOTU5MyAxLjIwNjE4IDYuNjY5NjEgMS4yMDYxOCA4LjIwNjIyQzEuMjA2MTggOS43NDI4MyAxLjgxNjU5IDExLjIxNjUgMi45MDMxNCAxMi4zMDMxQzMuOTg5NjkgMTMuMzg5NiA1LjQ2MzM3IDE0IDYuOTk5OTggMTRDOC41MzU5NSAxMy45OTc5IDEwLjAwODQgMTMuMzg2OCAxMS4wOTQ1IDEyLjMwMDdDMTIuMTgwNiAxMS4yMTQ2IDEyLjc5MTcgOS43NDIxOCAxMi43OTM4IDguMjA2MjJDMTIuNzkzOCA4LjA0NzI2IDEyLjczMDYgNy44OTQ4MSAxMi42MTgyIDcuNzgyNDFDMTIuNTA1OCA3LjY3MDAxIDEyLjM1MzQgNy42MDY4NiAxMi4xOTQ0IDcuNjA2ODZDMTIuMDM1NSA3LjYwNjg2IDExLjg4MyA3LjY3MDAxIDExLjc3MDYgNy43ODI0MUMxMS42NTgyIDcuODk0ODEgMTEuNTk1MSA4LjA0NzI2IDExLjU5NTEgOC4yMDYyMkMxMS41OTUxIDkuMTE1MDQgMTEuMzI1NiAxMC4wMDM1IDEwLjgyMDcgMTAuNzU5MUMxMC4zMTU3IDExLjUxNDggOS41OTgwOSAxMi4xMDM3IDguNzU4NDUgMTIuNDUxNUM3LjkxODggMTIuNzk5MyA2Ljk5NDg5IDEyLjg5MDMgNi4xMDM1MyAxMi43MTNDNS4yMTIxNyAxMi41MzU3IDQuMzkzNCAxMi4wOTgxIDMuNzUwNzcgMTEuNDU1NEMzLjEwODEzIDEwLjgxMjggMi42NzA0OSA5Ljk5NDA0IDIuNDkzMTkgOS4xMDI2OEMyLjMxNTg5IDguMjExMzIgMi40MDY4OCA3LjI4NzQgMi43NTQ2OCA2LjQ0Nzc2QzMuMTAyNDcgNS42MDgxMSAzLjY5MTQzIDQuODkwNDYgNC40NDcwOSA0LjM4NTU0QzUuMjAyNzUgMy44ODA2MyA2LjA5MTE2IDMuNjExMTMgNi45OTk5OCAzLjYxMTEzSDcuOTUwOThMNi41NzY0NyA0Ljk4NTY0QzYuNDY0MjMgNS4wOTgwMiA2LjQwMTE5IDUuMjUwMzUgNi40MDExOSA1LjQwOTE4QzYuNDAxMTkgNS41NjgwMSA2LjQ2NDIzIDUuNzIwMzUgNi41NzY0NyA1LjgzMjczQzYuNjMxODEgNS44ODg3NiA2LjY5Nzc4IDUuOTMzMTcgNi43NzA1MSA1Ljk2MzM2WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8Y2xpcFBhdGggW2lkXT1cInBhdGhJZFwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUmVmcmVzaEljb24gZXh0ZW5kcyBCYXNlSWNvbiB7XG4gICAgcGF0aElkOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYXRoSWQgPSAndXJsKCMnICsgVW5pcXVlQ29tcG9uZW50SWQoKSArICcpJztcbiAgICB9XG59XG4iXX0=