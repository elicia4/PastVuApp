import type { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
	MapComponent: undefined
	ErrorLoad: undefined
	PhotoPage: { PhotoJson: Root }
}

type MapScreenNavigationProp = NativeStackScreenProps<
	RootStackParamList,
	'MapComponent'
>

type Propss = {
	navigation: MapScreenNavigationProp
}

type SettingsScreenNavigationProp = NativeStackScreenProps<
	SettingsStackParamList,
	'SettingsComponent'
>

type SettingsStackParamList = {
	AppInfo: undefined
	ChangeTheme: undefined
	FeedBack: undefined
	SettingsComponent: undefined
	MapSettings: undefined
}

export type StartRoutes = 'MapComponent' | 'ErrorLoad' | 'PhotoPage'

export type BottomRoutes = 'MapComponent' | 'SettingsComponent'

export type SettingsRoutes =
	| 'AppInfo'
	| 'FeedBack'
	| 'SettingsComponent'
	| 'MapSettings'
