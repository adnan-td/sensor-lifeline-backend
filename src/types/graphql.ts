import type { GraphQLResolveInfo } from 'graphql';
import type { BloodGroup } from 'src/models/blood_group';
import type { Allergies, AllergiesList } from 'src/models/allergies';
import type { Prescription, PrescriptionList } from 'src/models/prescriptions';
import type { Doctors } from 'src/models/doctor';
import type { Tests, TestsList } from 'src/models/tests';
import type { Visits } from 'src/models/visits';
import type { Patient } from 'src/models/patient';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  temp?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allergies?: Maybe<Array<Maybe<Allergy>>>;
  blood_groups?: Maybe<Array<Maybe<Blood_Group>>>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  patients?: Maybe<Array<Maybe<Patient>>>;
  prescription?: Maybe<Array<Maybe<Prescription>>>;
  tests?: Maybe<Array<Maybe<Test>>>;
  visits?: Maybe<Array<Maybe<Visit>>>;
  visits_by_doctor?: Maybe<Array<Maybe<Visit>>>;
};


export type QueryVisits_By_DoctorArgs = {
  id: Scalars['ID'];
};

export type Allergy = {
  __typename?: 'allergy';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Blood_Group = {
  __typename?: 'blood_group';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Doctor = {
  __typename?: 'doctor';
  branch: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Patient = {
  __typename?: 'patient';
  aadhar?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  allergies?: Maybe<Array<Maybe<Patient_Allergy>>>;
  blood_group?: Maybe<Blood_Group>;
  city?: Maybe<Scalars['String']>;
  current_height?: Maybe<Scalars['String']>;
  current_weight?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  father_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mother_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  uid: Scalars['ID'];
  visits?: Maybe<Array<Maybe<Visit>>>;
};

export type Patient_Allergy = {
  __typename?: 'patient_allergy';
  allergy?: Maybe<Allergy>;
  id: Scalars['ID'];
  patient_id: Scalars['ID'];
};

export type Patient_Prescription = {
  __typename?: 'patient_prescription';
  id: Scalars['ID'];
  prescription?: Maybe<Prescription>;
  visit_id: Scalars['ID'];
};

export type Patient_Test = {
  __typename?: 'patient_test';
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  test: Test;
  visit_id: Scalars['ID'];
};

export type Prescription = {
  __typename?: 'prescription';
  dosage?: Maybe<Scalars['String']>;
  drug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<Scalars['String']>;
};

export type Test = {
  __typename?: 'test';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Visit = {
  __typename?: 'visit';
  bp?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  doctor_visited?: Maybe<Doctor>;
  ecg?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  patient: Scalars['ID'];
  prescriptions?: Maybe<Array<Maybe<Patient_Prescription>>>;
  temperature?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<Patient_Test>>>;
  weight?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info?: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  allergy: ResolverTypeWrapper<Allergies>;
  blood_group: ResolverTypeWrapper<BloodGroup>;
  doctor: ResolverTypeWrapper<Doctors>;
  patient: ResolverTypeWrapper<Patient>;
  patient_allergy: ResolverTypeWrapper<AllergiesList>;
  patient_prescription: ResolverTypeWrapper<PrescriptionList>;
  patient_test: ResolverTypeWrapper<TestsList>;
  prescription: ResolverTypeWrapper<Prescription>;
  test: ResolverTypeWrapper<Tests>;
  visit: ResolverTypeWrapper<Visits>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  allergy: Allergies;
  blood_group: BloodGroup;
  doctor: Doctors;
  patient: Patient;
  patient_allergy: AllergiesList;
  patient_prescription: PrescriptionList;
  patient_test: TestsList;
  prescription: Prescription;
  test: Tests;
  visit: Visits;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  temp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allergies?: Resolver<Maybe<Array<Maybe<ResolversTypes['allergy']>>>, ParentType, ContextType>;
  blood_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['blood_group']>>>, ParentType, ContextType>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['doctor']>>>, ParentType, ContextType>;
  patients?: Resolver<Maybe<Array<Maybe<ResolversTypes['patient']>>>, ParentType, ContextType>;
  prescription?: Resolver<Maybe<Array<Maybe<ResolversTypes['prescription']>>>, ParentType, ContextType>;
  tests?: Resolver<Maybe<Array<Maybe<ResolversTypes['test']>>>, ParentType, ContextType>;
  visits?: Resolver<Maybe<Array<Maybe<ResolversTypes['visit']>>>, ParentType, ContextType>;
  visits_by_doctor?: Resolver<Maybe<Array<Maybe<ResolversTypes['visit']>>>, ParentType, ContextType, RequireFields<QueryVisits_By_DoctorArgs, 'id'>>;
};

export type AllergyResolvers<ContextType = any, ParentType extends ResolversParentTypes['allergy'] = ResolversParentTypes['allergy']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blood_GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['blood_group'] = ResolversParentTypes['blood_group']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoctorResolvers<ContextType = any, ParentType extends ResolversParentTypes['doctor'] = ResolversParentTypes['doctor']> = {
  branch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PatientResolvers<ContextType = any, ParentType extends ResolversParentTypes['patient'] = ResolversParentTypes['patient']> = {
  aadhar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allergies?: Resolver<Maybe<Array<Maybe<ResolversTypes['patient_allergy']>>>, ParentType, ContextType>;
  blood_group?: Resolver<Maybe<ResolversTypes['blood_group']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  father_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mother_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  visits?: Resolver<Maybe<Array<Maybe<ResolversTypes['visit']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Patient_AllergyResolvers<ContextType = any, ParentType extends ResolversParentTypes['patient_allergy'] = ResolversParentTypes['patient_allergy']> = {
  allergy?: Resolver<Maybe<ResolversTypes['allergy']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  patient_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Patient_PrescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['patient_prescription'] = ResolversParentTypes['patient_prescription']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prescription?: Resolver<Maybe<ResolversTypes['prescription']>, ParentType, ContextType>;
  visit_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Patient_TestResolvers<ContextType = any, ParentType extends ResolversParentTypes['patient_test'] = ResolversParentTypes['patient_test']> = {
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['test'], ParentType, ContextType>;
  visit_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['prescription'] = ResolversParentTypes['prescription']> = {
  dosage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  drug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  interval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestResolvers<ContextType = any, ParentType extends ResolversParentTypes['test'] = ResolversParentTypes['test']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisitResolvers<ContextType = any, ParentType extends ResolversParentTypes['visit'] = ResolversParentTypes['visit']> = {
  bp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  doctor_visited?: Resolver<Maybe<ResolversTypes['doctor']>, ParentType, ContextType>;
  ecg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  patient?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['patient_prescription']>>>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tests?: Resolver<Maybe<Array<Maybe<ResolversTypes['patient_test']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  allergy?: AllergyResolvers<ContextType>;
  blood_group?: Blood_GroupResolvers<ContextType>;
  doctor?: DoctorResolvers<ContextType>;
  patient?: PatientResolvers<ContextType>;
  patient_allergy?: Patient_AllergyResolvers<ContextType>;
  patient_prescription?: Patient_PrescriptionResolvers<ContextType>;
  patient_test?: Patient_TestResolvers<ContextType>;
  prescription?: PrescriptionResolvers<ContextType>;
  test?: TestResolvers<ContextType>;
  visit?: VisitResolvers<ContextType>;
};

