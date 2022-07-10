describe ('Our first Test Suite', ()=> {
	describe('Given access the test link',()=> {
		before(() =>{
			cy.visit('/')
		})

		it('Then Title should be displayed', () => {
			cy.get('h2').contains('Discover our skin friendlines')
		})

		it('Then Choose your size label should be displayed', () => {
			cy.get('p').contains('CHOOSE YOUR SIZE')
		}) 
			
		it('Then Size buttons should be displayed', () => {
			cy.get('[class="nav nav-pills"]')
			cy.get('[class="nav-item diaperSize"]')
		})

		it('Then Size 1 (2-5 KG) button should be actived', () => {
			cy.get('a[class="nav-link active"]')
			cy.get('[class="nav-item diaperSize"]')
		}) 

		it('Then Product image should be displayed', () => {
			cy.get('a[class="nav-link active"]')
			cy.get('img').should('have.attr', 'src', 'https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg')
		})  
		it('Then Package contain label should be displayed', () => {
			cy.get('h2').contains('Your test package contains')
		})  
		it('Then DIAPERS infor & reviews stars should be displayed', () => {
			cy.get('h4').contains('10 LILLYDOO DIAPERS')
			cy.get('div [class="h5 mb-2"]')
			cy.get('[class="review-counts"]',{timeout : 5000}).then( counting =>{
				expect(counting.text()).to.contains('(12)')
			})
		})

		it('Then 15 Wet wipes should be displayed', () => {
			cy.get('h4').contains('15 WET WIPES WITH 99% WATER')
			cy.get('div [class="h5 mb-2"]')
			cy.get('[class="review-counts"]').then( counting =>{
				expect(counting.text()).to.contains('(114)')
			})
		})

		describe(' When you click on 2 (4-8 Kg)button',()=>{
			beforeEach(() => {
				cy.get('[class="nav-item diaperSize"]')
				cy.get('p[class="name"]').contains('2')
				cy.get('p[class="title"]').contains('(4-8 KG)').click()
			})
			it('Then (4-8 KG)Product image should replace in the image placeholer', () => {
				cy.get('a[class="nav-link active"]')
				cy.get('img').should('have.attr', 'src', 'https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-20.jpg')
			})

			it('Then Product review counts should change', () => {
				cy.get('div [class="h5 mb-2"]')
				cy.get('[class="review-counts"]').then( counting =>{
					expect(counting.text()).to.contains('(91)')
				})
			})
		})

		describe(' When you click on 3 (6-10 Kg)button',()=>{
			beforeEach(() => {
				cy.get('[class="nav-item diaperSize"]')
				cy.get('p[class="name"]').contains('3')
				cy.get('p[class="title"]').contains('(6-10 KG)').click()

			})
			it('Then (6-10 KG) Product image should change', () => {
				cy.get('a[class="nav-link active"]')
				cy.get('img').should('have.attr', 'src', 'https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-30.jpg')
			})
			it('Then Product review counts should change', () => {
				cy.get('div [class="h5 mb-2"]')
				cy.get('[class="review-counts"]').then( counting =>{
					expect(counting.text()).to.contains('(327)')
					expect(counting.text()).to.contains('(114)')
				})
			})
		})

		describe(' When you click on 4 (9-14 Kg)button',()=>{
			beforeEach(() => {
				cy.get('[class="nav-item diaperSize"]')
				cy.get('p[class="name"]').contains('4')
				cy.get('p[class="title"]').contains('(9-14 KG)').click()
			})
			it('Then (9-14 KG) Product image should change', () => {
				cy.get('a[class="nav-link active"]')
				cy.get('img').should('have.attr', 'src', 'https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-40.jpg')
			})
			it('Then Product review counts should change', () => {
				cy.get('div [class="h5 mb-2"]')
				cy.get('[class="review-counts"]').then( counting =>{
					expect(counting.text()).to.contains('(481)')
					expect(counting.text()).to.contains('(46)')
				})
			})
		})

		describe(' When you click on 5 (11-16 Kg)button',()=>{
			beforeEach(() => {
				cy.get('[class="nav-item diaperSize"]')
				cy.get('p[class="name"]').contains('5')
				cy.get('p[class="title"]').contains('(11-16 KG)').click()
			})
			it('Then (11-16 KG) Product image should change', () => {
				cy.get('a[class="nav-link active"]')
				cy.get('img').should('have.attr', 'src', 'https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-50.jpg')
			})
			it('Then Product review counts should change', () => {
				cy.get('div [class="h5 mb-2"]')
				cy.get('[class="review-counts"]').then( counting =>{
					expect(counting.text()).to.contains('(387)')
					expect(counting.text()).to.contains('(46)')
				})
			})
		})
	})
})
