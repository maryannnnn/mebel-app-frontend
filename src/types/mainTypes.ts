export interface CompanyMain {
    id: string;
    // attributes: {
    //     titleCompany: string;
    //     // другие поля...
    // };
}

export interface CompaniesMainQueryResult {
    data: {
        data: CompanyMain[];
    };
}
