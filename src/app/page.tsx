import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Viewer from '@/components/viewer'

export default function Home() {
	return (
		<main>
			<Card>
				<CardHeader>
					<CardTitle>PDF Viewer</CardTitle>
				</CardHeader>
				<CardContent>hey</CardContent>
			</Card>

			<Viewer />
		</main>
	)
}
