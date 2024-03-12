export interface IAllocation {
    assetAllocationID: number | null,
    employeeID: number | null,
    assetID: number | null,
    assetCount: number | null,
    allocationDetails: string | null,
    assetAllocatedFrom: Date | null,
    assetAllocatedTill: Date | null,
    allocationStatus: string | null
}

// {"assetAllocationID":1,"employeeID":3,"assetID":1,"assetCount":2,"allocationDetails":"Allocated laptops for team offsite meeting","assetAllocatedFrom":"2024-02-20T00:00:00","assetAllocatedTill":"2024-02-25T00:00:00","allocationStatus":"Allocated"}

// Deallocated