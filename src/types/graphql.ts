import type { GraphQLResolveInfo } from 'graphql';
import type { BloodGroup } from '../models/blood_group';
import type { Allergies, AllergiesList } from '../models/allergies';
import type { Prescriptions, PrescriptionList } from '../models/prescriptions';
import type { Doctors } from '../models/doctor';
import type { Tests, TestsList } from '../models/tests';
import type { Visits } from '../models/visits';
import type { Patients } from '../models/patient';
import type { Operators } from '../models/operators';
import type { Users } from '../models/user';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  addAllergy?: Maybe<Response>;
  addDoctor?: Maybe<Response>;
  addOperator?: Maybe<Response>;
  addPatient?: Maybe<Response>;
  addPatientAllergy?: Maybe<Response>;
  addPrescription?: Maybe<Response>;
  addTest?: Maybe<Response>;
  addVisit?: Maybe<Response>;
  addVisitPrescription?: Maybe<Response>;
  addVisitTest?: Maybe<Response>;
  deleteAllergy?: Maybe<Response>;
  deletePatientAllergy?: Maybe<Response>;
  deletePrescription?: Maybe<Response>;
  deleteTest?: Maybe<Response>;
  deleteVisitPrescription?: Maybe<Response>;
  deleteVisitTest?: Maybe<Response>;
  login?: Maybe<UserResponse>;
  register?: Maybe<UserResponse>;
  updateAllergy?: Maybe<Response>;
  updateDoctor?: Maybe<Response>;
  updateOperator?: Maybe<Response>;
  updatePatient?: Maybe<Response>;
  updatePatientAllergy?: Maybe<Response>;
  updatePrescription?: Maybe<Response>;
  updateTest?: Maybe<Response>;
  updateVisit?: Maybe<Response>;
  updateVisitPrescription?: Maybe<Response>;
  updateVisitTest?: Maybe<Response>;
};


export type MutationAddAllergyArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationAddDoctorArgs = {
  branch: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddOperatorArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  mother_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  pin?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationAddPatientArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  blood_group?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  current_height?: InputMaybe<Scalars['String']>;
  current_weight?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  mother_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationAddPatientAllergyArgs = {
  allergy: Scalars['Int'];
  patient_id: Scalars['Int'];
};


export type MutationAddPrescriptionArgs = {
  dosage: Scalars['String'];
  drug: Scalars['String'];
  interval: Scalars['String'];
};


export type MutationAddTestArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationAddVisitArgs = {
  bp?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  doctor_visited?: InputMaybe<Scalars['Int']>;
  ecg?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  patient: Scalars['Int'];
  temperature?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};


export type MutationAddVisitPrescriptionArgs = {
  prescription: Scalars['Int'];
  visit_id: Scalars['Int'];
};


export type MutationAddVisitTestArgs = {
  comments?: InputMaybe<Scalars['String']>;
  date: Scalars['String'];
  test: Scalars['Int'];
  visit_id: Scalars['Int'];
};


export type MutationDeleteAllergyArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePatientAllergyArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePrescriptionArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTestArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteVisitPrescriptionArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteVisitTestArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAllergyArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationUpdateDoctorArgs = {
  branch?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOperatorArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  mother_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePatientArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  blood_group?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  current_height?: InputMaybe<Scalars['String']>;
  current_weight?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  mother_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePatientAllergyArgs = {
  allergy?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  patient_id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdatePrescriptionArgs = {
  dosage?: InputMaybe<Scalars['String']>;
  drug?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  interval?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTestArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationUpdateVisitArgs = {
  bp?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  doctor_visited?: InputMaybe<Scalars['Int']>;
  ecg?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  temperature?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateVisitPrescriptionArgs = {
  id: Scalars['Int'];
  prescription?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateVisitTestArgs = {
  comments?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  test?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  allergies?: Maybe<Array<Maybe<Allergy>>>;
  blood_groups?: Maybe<Array<Maybe<Blood_Group>>>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  isAuthenticated?: Maybe<User>;
  logout?: Maybe<Scalars['String']>;
  operatorById?: Maybe<Operator>;
  patients?: Maybe<Array<Maybe<Patient>>>;
  prescription?: Maybe<Array<Maybe<Prescription>>>;
  tests?: Maybe<Array<Maybe<Test>>>;
  visits?: Maybe<Array<Maybe<Visit>>>;
};


export type QueryDoctorsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryOperatorByIdArgs = {
  id: Scalars['Int'];
};


export type QueryPatientsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryVisitsArgs = {
  id?: InputMaybe<Scalars['Int']>;
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
  visits?: Maybe<Array<Maybe<Visit>>>;
};

export type Operator = {
  __typename?: 'operator';
  aadhar?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
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

export type Response = {
  __typename?: 'response';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Test = {
  __typename?: 'test';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'userResponse';
  code: Scalars['Int'];
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Visit = {
  __typename?: 'visit';
  bp?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  doctor_visited?: Maybe<Doctor>;
  ecg?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  patient?: Maybe<Patient>;
  prescriptions?: Maybe<Array<Maybe<Patient_Prescription>>>;
  temperature?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<Patient_Test>>>;
  weight?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  allergy: ResolverTypeWrapper<Allergies>;
  blood_group: ResolverTypeWrapper<BloodGroup>;
  doctor: ResolverTypeWrapper<Doctors>;
  operator: ResolverTypeWrapper<Operators>;
  patient: ResolverTypeWrapper<Patients>;
  patient_allergy: ResolverTypeWrapper<AllergiesList>;
  patient_prescription: ResolverTypeWrapper<PrescriptionList>;
  patient_test: ResolverTypeWrapper<TestsList>;
  prescription: ResolverTypeWrapper<Prescriptions>;
  response: ResolverTypeWrapper<Response>;
  test: ResolverTypeWrapper<Tests>;
  user: ResolverTypeWrapper<Users>;
  userResponse: ResolverTypeWrapper<Omit<UserResponse, 'data'> & { data?: Maybe<ResolversTypes['user']> }>;
  visit: ResolverTypeWrapper<Visits>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  allergy: Allergies;
  blood_group: BloodGroup;
  doctor: Doctors;
  operator: Operators;
  patient: Patients;
  patient_allergy: AllergiesList;
  patient_prescription: PrescriptionList;
  patient_test: TestsList;
  prescription: Prescriptions;
  response: Response;
  test: Tests;
  user: Users;
  userResponse: Omit<UserResponse, 'data'> & { data?: Maybe<ResolversParentTypes['user']> };
  visit: Visits;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, Partial<MutationAddAllergyArgs>>;
  addDoctor?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddDoctorArgs, 'branch' | 'email' | 'name'>>;
  addOperator?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddOperatorArgs, 'email' | 'name'>>;
  addPatient?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddPatientArgs, 'email' | 'name'>>;
  addPatientAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddPatientAllergyArgs, 'allergy' | 'patient_id'>>;
  addPrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddPrescriptionArgs, 'dosage' | 'drug' | 'interval'>>;
  addTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, Partial<MutationAddTestArgs>>;
  addVisit?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddVisitArgs, 'patient'>>;
  addVisitPrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddVisitPrescriptionArgs, 'prescription' | 'visit_id'>>;
  addVisitTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationAddVisitTestArgs, 'date' | 'test' | 'visit_id'>>;
  deleteAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeleteAllergyArgs, 'id'>>;
  deletePatientAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeletePatientAllergyArgs, 'id'>>;
  deletePrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeletePrescriptionArgs, 'id'>>;
  deleteTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeleteTestArgs, 'id'>>;
  deleteVisitPrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeleteVisitPrescriptionArgs, 'id'>>;
  deleteVisitTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationDeleteVisitTestArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['userResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  register?: Resolver<Maybe<ResolversTypes['userResponse']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'password'>>;
  updateAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateAllergyArgs, 'id' | 'name'>>;
  updateDoctor?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateDoctorArgs, 'id'>>;
  updateOperator?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, Partial<MutationUpdateOperatorArgs>>;
  updatePatient?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdatePatientArgs, 'id'>>;
  updatePatientAllergy?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdatePatientAllergyArgs, 'id'>>;
  updatePrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdatePrescriptionArgs, 'id'>>;
  updateTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateTestArgs, 'id' | 'name'>>;
  updateVisit?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateVisitArgs, 'id'>>;
  updateVisitPrescription?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateVisitPrescriptionArgs, 'id'>>;
  updateVisitTest?: Resolver<Maybe<ResolversTypes['response']>, ParentType, ContextType, RequireFields<MutationUpdateVisitTestArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allergies?: Resolver<Maybe<Array<Maybe<ResolversTypes['allergy']>>>, ParentType, ContextType>;
  blood_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['blood_group']>>>, ParentType, ContextType>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['doctor']>>>, ParentType, ContextType, Partial<QueryDoctorsArgs>>;
  isAuthenticated?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  logout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatorById?: Resolver<Maybe<ResolversTypes['operator']>, ParentType, ContextType, RequireFields<QueryOperatorByIdArgs, 'id'>>;
  patients?: Resolver<Maybe<Array<Maybe<ResolversTypes['patient']>>>, ParentType, ContextType, Partial<QueryPatientsArgs>>;
  prescription?: Resolver<Maybe<Array<Maybe<ResolversTypes['prescription']>>>, ParentType, ContextType>;
  tests?: Resolver<Maybe<Array<Maybe<ResolversTypes['test']>>>, ParentType, ContextType>;
  visits?: Resolver<Maybe<Array<Maybe<ResolversTypes['visit']>>>, ParentType, ContextType, Partial<QueryVisitsArgs>>;
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
  visits?: Resolver<Maybe<Array<Maybe<ResolversTypes['visit']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['operator'] = ResolversParentTypes['operator']> = {
  aadhar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['response'] = ResolversParentTypes['response']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestResolvers<ContextType = any, ParentType extends ResolversParentTypes['test'] = ResolversParentTypes['test']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['userResponse'] = ResolversParentTypes['userResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisitResolvers<ContextType = any, ParentType extends ResolversParentTypes['visit'] = ResolversParentTypes['visit']> = {
  bp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  doctor_visited?: Resolver<Maybe<ResolversTypes['doctor']>, ParentType, ContextType>;
  ecg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  patient?: Resolver<Maybe<ResolversTypes['patient']>, ParentType, ContextType>;
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
  operator?: OperatorResolvers<ContextType>;
  patient?: PatientResolvers<ContextType>;
  patient_allergy?: Patient_AllergyResolvers<ContextType>;
  patient_prescription?: Patient_PrescriptionResolvers<ContextType>;
  patient_test?: Patient_TestResolvers<ContextType>;
  prescription?: PrescriptionResolvers<ContextType>;
  response?: ResponseResolvers<ContextType>;
  test?: TestResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
  userResponse?: UserResponseResolvers<ContextType>;
  visit?: VisitResolvers<ContextType>;
};

