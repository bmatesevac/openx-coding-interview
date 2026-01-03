
import * as sut from './claude-interactive-questions'

describe("Claude Interview Questions", () => {

    describe.only("Basic Filter", () => {

        it(" test 1", () => {
            expect(sut.filterByMultiplePrefixes(["banner", "video", "native"], ["ban", "vid"])).toEqual(["banner", "video"]);
        })

        it(" test 2", () => {
            expect(sut.filterByMultiplePrefixes(["IAB2-1", "IAB3-2", "IAB2-5"], ["IAB2"])).toEqual(["IAB2-1", "IAB2-5"]);
        })


    })


})

