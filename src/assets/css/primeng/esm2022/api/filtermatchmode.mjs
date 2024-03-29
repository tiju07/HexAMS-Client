export class FilterMatchMode {
    static STARTS_WITH = 'startsWith';
    static CONTAINS = 'contains';
    static NOT_CONTAINS = 'notContains';
    static ENDS_WITH = 'endsWith';
    static EQUALS = 'equals';
    static NOT_EQUALS = 'notEquals';
    static IN = 'in';
    static LESS_THAN = 'lt';
    static LESS_THAN_OR_EQUAL_TO = 'lte';
    static GREATER_THAN = 'gt';
    static GREATER_THAN_OR_EQUAL_TO = 'gte';
    static BETWEEN = 'between';
    static IS = 'is';
    static IS_NOT = 'isNot';
    static BEFORE = 'before';
    static AFTER = 'after';
    static DATE_IS = 'dateIs';
    static DATE_IS_NOT = 'dateIsNot';
    static DATE_BEFORE = 'dateBefore';
    static DATE_AFTER = 'dateAfter';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybWF0Y2htb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9maWx0ZXJtYXRjaG1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGVBQWU7SUFDakIsTUFBTSxDQUFVLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFDM0MsTUFBTSxDQUFVLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDdEMsTUFBTSxDQUFVLFlBQVksR0FBRyxhQUFhLENBQUM7SUFDN0MsTUFBTSxDQUFVLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFDdkMsTUFBTSxDQUFVLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDbEMsTUFBTSxDQUFVLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDekMsTUFBTSxDQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFVLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDakMsTUFBTSxDQUFVLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUM5QyxNQUFNLENBQVUsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNwQyxNQUFNLENBQVUsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ2pELE1BQU0sQ0FBVSxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLE1BQU0sQ0FBVSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE1BQU0sQ0FBVSxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLE1BQU0sQ0FBVSxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sQ0FBVSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLE1BQU0sQ0FBVSxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQ25DLE1BQU0sQ0FBVSxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQzFDLE1BQU0sQ0FBVSxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBQzNDLE1BQU0sQ0FBVSxVQUFVLEdBQUcsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZpbHRlck1hdGNoTW9kZSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTlRBSU5TID0gJ2NvbnRhaW5zJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PVF9DT05UQUlOUyA9ICdub3RDb250YWlucyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTkRTX1dJVEggPSAnZW5kc1dpdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVFVQUxTID0gJ2VxdWFscyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOT1RfRVFVQUxTID0gJ25vdEVxdWFscyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJTiA9ICdpbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMRVNTX1RIQU4gPSAnbHQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEVTU19USEFOX09SX0VRVUFMX1RPID0gJ2x0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVBVEVSX1RIQU4gPSAnZ3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JFQVRFUl9USEFOX09SX0VRVUFMX1RPID0gJ2d0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCRVRXRUVOID0gJ2JldHdlZW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSVMgPSAnaXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSVNfTk9UID0gJ2lzTm90JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJFRk9SRSA9ICdiZWZvcmUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUZURVIgPSAnYWZ0ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9JUyA9ICdkYXRlSXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9JU19OT1QgPSAnZGF0ZUlzTm90JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERBVEVfQkVGT1JFID0gJ2RhdGVCZWZvcmUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9BRlRFUiA9ICdkYXRlQWZ0ZXInO1xufVxuIl19