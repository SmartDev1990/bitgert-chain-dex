import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@olive-dev/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'
import useGetOlivePrice from '../../hooks/useGetOlivePrice'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const olivePrice = useGetOlivePrice()
  const cakePriceUsd = olivePrice ? parseFloat(olivePrice?.toFixed(6)) : 0
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      priceLink="https://www.coingecko.com/id/koin_koin/bitgert"
      profile={profile}
      {...props}
    />
  )
}

export default Menu
