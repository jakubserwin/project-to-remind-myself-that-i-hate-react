/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** Information of the bike availability of a station by type */
export type BikeAvailabilityInfo = {
  /** Number of available electrical bikes in the station */
  electrical?: Maybe<Scalars['Int']>;
  /** Number of available mechanical bikes in the station */
  mechanical?: Maybe<Scalars['Int']>;
  /** Total number of available bikes in the station */
  total?: Maybe<Scalars['Int']>;
};

/** Bike station information */
export type BikeStation = {
  /** Information about the available bikes and docks of the station */
  available?: Maybe<BikeStationAvailabilityInfo>;
  /** Total number of bikes the station has */
  capacity?: Maybe<Scalars['Int']>;
  /** Location coordinates of the station */
  coordinates?: Maybe<CoordinatesOutput>;
  /** Unique ID of the station */
  id?: Maybe<Scalars['ID']>;
  /** Last updated information timestamp (in ms since epoch) */
  lastUpdated?: Maybe<Scalars['Int']>;
  /** Name of the station */
  name?: Maybe<Scalars['String']>;
  /** Status of the station e.g. IN_SERVICE */
  status?: Maybe<BikeStationStatus>;
};

/** Information about the available bikes and docks of the station */
export type BikeStationAvailabilityInfo = {
  /** Number of available bikes in the station by type */
  bikes?: Maybe<BikeAvailabilityInfo>;
  /** Number of available docks in the station */
  docks?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BikeStationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BikeStationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BikeStationEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BikeStation>;
};

export type BikeStationQueryResponse = BikeStation | NotFoundError;

export enum BikeStationStatus {
  Closed = 'CLOSED',
  InService = 'IN_SERVICE',
  Maintenance = 'MAINTENANCE'
}

/** Bus line information */
export type BusLine = {
  /** Color of the line represented as a Hexadecimal string */
  color?: Maybe<Scalars['String']>;
  /** Ending stop of the line */
  endingStop?: Maybe<BusStop>;
  /** Numeric Code of the line */
  id?: Maybe<Scalars['Int']>;
  /** Name of the line */
  name?: Maybe<Scalars['String']>;
  /** Origin stop of the line */
  originStop?: Maybe<BusStop>;
  /** Stops of the line */
  stops?: Maybe<BusStopConnection>;
};


/** Bus line information */
export type BusLineStopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BusLineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BusLineEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BusLineEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BusLine>;
};

export type BusLineQueryResponse = BusLine | NotFoundError;

/** Bus stop information */
export type BusStop = {
  /** Unique ID of the stop */
  id?: Maybe<Scalars['ID']>;
  /** Location of the stop */
  location?: Maybe<Location>;
  /** Name of the stop */
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type BusStopConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BusStopEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BusStopEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BusStop>;
};

export type BusStopQueryResponse = BusStop | NotFoundError;

/** Coordinates (Latitude, Longitude, Altitude), of a given station/stop */
export type CoordinatesInput = {
  altitude?: InputMaybe<Scalars['Float']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

/** Coordinates (Latitude, Longitude, Altitude), of a given station/stop */
export type CoordinatesOutput = {
  altitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Input for the filterBy argument of the bikes queries, which allows filtering a connection by some parameters (e.g. only with available bikes) */
export type FilterByInputBike = {
  only?: InputMaybe<OnlyFilterByInputBike>;
};

/** Input for the filterBy argument of the metro and bus queries, which allows filtering a connection by some parameters (e.g. lineName or lineId) */
export type FilterByInputTmb = {
  lineId?: InputMaybe<Scalars['Int']>;
  lineName?: InputMaybe<Scalars['String']>;
};

/** Input for the FindBy argument of the queries, which allows finding an entity by some parameters (e.g. name or id) */
export type FindByInput = {
  /** Finds the closest station given some coordinates */
  closest?: InputMaybe<CoordinatesInput>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Location of a stop/station */
export type Location = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinatesOutput>;
  district?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

/** Metro line information */
export type MetroLine = {
  /** Color of the line represented as a Hexadecimal string */
  color?: Maybe<Scalars['String']>;
  /** Ending station of the line */
  endingStation?: Maybe<MetroStation>;
  /** Numeric Code of the line */
  id?: Maybe<Scalars['Int']>;
  /** Name of the line */
  name?: Maybe<Scalars['String']>;
  /** Origin station of the line */
  originStation?: Maybe<MetroStation>;
  /** Stations of the line */
  stations?: Maybe<MetroStationConnection>;
};


/** Metro line information */
export type MetroLineStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type MetroLineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetroLineEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetroLineEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<MetroLine>;
};

export type MetroLineQueryResponse = MetroLine | NotFoundError;

/** Metro station information */
export type MetroStation = {
  /** Location coordinates of the station */
  coordinates?: Maybe<CoordinatesOutput>;
  /** Unique ID of the station */
  id?: Maybe<Scalars['ID']>;
  /** Lines the station belongs to e.g. L1, L2 */
  lines?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Name of the station */
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type MetroStationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetroStationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetroStationEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<MetroStation>;
};

export type MetroStationQueryResponse = MetroStation | NotFoundError;

export type NotFoundError = {
  /** Search params that resulted in a not found error */
  params?: Maybe<Scalars['JSON']>;
};

export type OnlyFilterByInputBike = {
  hasAvailableBikes?: InputMaybe<Scalars['Boolean']>;
  hasAvailableDocks?: InputMaybe<Scalars['Boolean']>;
  hasAvailableElectricalBikes?: InputMaybe<Scalars['Boolean']>;
  isInService?: InputMaybe<Scalars['Boolean']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Root Query */
export type RootQuery = {
  /** Returns the information about a bike station */
  bikeStation?: Maybe<BikeStationQueryResponse>;
  /** Information about the public bike stations (SMOU) of the city of Barcelona */
  bikeStations?: Maybe<BikeStationConnection>;
  /** Returns the information about a bus line */
  busLine?: Maybe<BusLineQueryResponse>;
  /** Information about the bus lines of the city of Barcelona */
  busLines?: Maybe<BusLineConnection>;
  /** Returns the information about a bus stop */
  busStop?: Maybe<BusStopQueryResponse>;
  /** Information about the bus stops of the city of Barcelona */
  busStops?: Maybe<BusStopConnection>;
  /** Returns the information about a metro line */
  metroLine?: Maybe<MetroLineQueryResponse>;
  /** Information about the metro lines of the city of Barcelona */
  metroLines?: Maybe<MetroLineConnection>;
  /** Returns the information about a metro station */
  metroStation?: Maybe<MetroStationQueryResponse>;
  /** Information about the metro stations of the city of Barcelona */
  metroStations?: Maybe<MetroStationConnection>;
};


/** Root Query */
export type RootQueryBikeStationArgs = {
  findBy: FindByInput;
};


/** Root Query */
export type RootQueryBikeStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filterBy?: InputMaybe<FilterByInputBike>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type RootQueryBusLineArgs = {
  findBy: FindByInput;
};


/** Root Query */
export type RootQueryBusLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type RootQueryBusStopArgs = {
  findBy: FindByInput;
};


/** Root Query */
export type RootQueryBusStopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filterBy?: InputMaybe<FilterByInputTmb>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type RootQueryMetroLineArgs = {
  findBy: FindByInput;
};


/** Root Query */
export type RootQueryMetroLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type RootQueryMetroStationArgs = {
  findBy: FindByInput;
};


/** Root Query */
export type RootQueryMetroStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filterBy?: InputMaybe<FilterByInputTmb>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};
