interface Source {
  name?: string;
  title?: string;
}

interface SearchResultObject {
  highlight: any;
  id: string;
  source: Source;
}

export interface AutoSearchResult {
  playlist: SearchResultObject[];
  profile: SearchResultObject[];
  song: SearchResultObject[];
}
