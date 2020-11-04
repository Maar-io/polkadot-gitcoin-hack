#!/usr/bin/python
#
#   This script reads an account's pending payouts 
#   with a combination of a local instance of Sidecar and a local Kusama node.
# 
#   Using API:
#   https://paritytech.github.io/substrate-api-sidecar/dist/
#   https://github.com/paritytech/substrate-api-sidecar
#
#   How to run local Kusama node:
#   https://dotleap.com/how-to-import-a-pre-synced-kusama-database/
# 

import requests
import json

SIDECAR = 'http://127.0.0.1:8080'
DEPTH = 5

def checkSidecarConnection():
    requestGet(SIDECAR)
    print(f"   ✅ Connected to SIDECAR {SIDECAR}")

def checkKusamaConnection():
    name = requestGet(f'{SIDECAR}/node/version')['chain']
    print(f"   ✅ Connected to Chain {name}")

def requestGet(url):
    try:
        response = requests.get(url)
        if response.ok:
            return json.loads(response.text)
        else:
            print(f"   🚫Connection to {url} FAILED ...{response.status_code} ")
            exit()
    except:
        print(f"   🚫 Can't connect to {url}")
        exit()

def getAccount():
    print("Enter block author Id to read it's pending payouts:")
    account = input()
    if account == '':
        print("Read most recent finalized block")
        account = requestGet(f'{SIDECAR}/blocks/head')['authorId']
    return account

def calculatePayouts(account):
    params = f'depth={DEPTH}&unclaimedOnly={str(True).lower()}'
    stakingPayouts = requestGet(f'{SIDECAR}/accounts/{account}/staking-payouts?{params}')

    erasPayouts = stakingPayouts['erasPayouts']
    totalPayout = 0
    for eraPayout in erasPayouts:
        payouts = eraPayout['payouts']
        for payout in payouts:
            value = int(payout['nominatorStakingPayout'])
            if payout['claimed'] is False:
                totalPayout += value
    decimals = 10000000000
    totalPayout /= decimals
    print(f'Total Unclaimed payouts for account {account}, depth:{DEPTH} is: {totalPayout} KSM')

if __name__ == "__main__":
    checkSidecarConnection()
    checkKusamaConnection()
    account = getAccount()
    calculatePayouts(account)