import { DiscogsItem } from './item';
import { DiscogsPagination } from './pagination';

export interface DiscogsCollectionFolders {
  pagination: DiscogsPagination;
  releases: DiscogsItem[];
}
