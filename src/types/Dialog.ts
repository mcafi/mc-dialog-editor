export type Langugage = "en" | "it" | "fr";

export type DialogStruct = {
  [uuid: string]: BaseDialog | DialogData;
  root: RootDialog;
  __editor: EditorMetadata;
};

export type BaseDialog = {};

export type DialogData = BaseDialog & {
  name: string;
  character_uuid: string;
  portrait: string;
  text: Record<Langugage, string>;
  parent: string;
  next: string;
  signals: SignalData;
  choices: ChoiceData[];
};

export type RootDialog = BaseDialog & {
  next: string;
};

export type EditorMetadata = BaseDialog & {
  root: BaseDialogMetadata;
  dialogues: DialogMetadata[];
  conditions: ConditionMetadata[];
  signals: SignalMetadata[];
  choices: ChoiceMetadata[];
};

export type BaseDialogMetadata = {
  uuid: string;
  offset: [number, number];
};

export type DialogMetadata = BaseDialogMetadata & {
  parent?: string;
};

// TODO
export type ConditionMetadata = BaseDialogMetadata & {
  parent: string;
  next: string;
  [variable: string]: ConditionData | string;
};

export type ConditionData = {
  value: string;
  operator: string;
  type: string;
};

export type SignalMetadata = BaseDialogMetadata & {
  parent: string;
  data: SignalData;
};

export type SignalData = {
  parent: string;
  [signalName: string]: SignalParams | string;
};

export type SignalParams = {
  [type: string]: string;
};

export type ChoiceMetadata = BaseDialogMetadata & {
  parent: string;
  data?: ChoiceData;
};

export type ChoiceData = {
  next: string;
  parent: string;
  uuid?: string;
  text: Record<Langugage, string>;
};
